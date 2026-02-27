const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');
const b64 = fs.readFileSync('watermark_b64.txt', 'utf8').trim();

const injection = `const margin = 15;

        // --- WATERMARK IMAGE ---
        const watermarkB64 = "data:image/png;base64," + "${b64}";
        // Try to set transparency (GState works in jsPDF 2.x)
        try {
            doc.setGState(new doc.GState({opacity: 0.15}));
        } catch(e) {}
        
        // Add centered watermark
        // A4 center is pageWidth/2, pageHeight/2
        const wmW = 140;
        const wmH = 140 * (68 / 345);
        doc.addImage(watermarkB64, 'PNG', (pageWidth - wmW) / 2, (pageHeight - wmH) / 2, wmW, wmH);
        
        // Reset transparency
        try {
            doc.setGState(new doc.GState({opacity: 1.0}));
        } catch(e) {}
`;

code = code.replace("const margin = 15;", injection);
fs.writeFileSync('script.js', code, 'utf8');
console.log("Injected successfully");
