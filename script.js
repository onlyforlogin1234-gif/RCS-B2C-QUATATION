const pricingData = {
    // ---- INDOOR COB ----
    'P0.9_COB': { name: 'P0.9 COB', series: 'Indoor COB', type: 'indoor', endUserRate: 18000, moduleSize: '320x160', cabinetSize: '600x337.5', moduleRes: [640, 360], brightness: 800, refreshRate: 3840, technology: 'COB Display', warranty: 1, maxPowerPerSqm: 400 },
    'P1.25_COB': { name: 'P1.25 COB', series: 'Indoor COB', type: 'indoor', endUserRate: 16500, moduleSize: '320x160', cabinetSize: '600x337.5', moduleRes: [480, 270], brightness: 800, refreshRate: 3840, technology: 'COB Display', warranty: 1, maxPowerPerSqm: 400 },
    'P1.5_COB': { name: 'P1.5 COB', series: 'Indoor COB', type: 'indoor', endUserRate: 14800, moduleSize: '320x160', cabinetSize: '640x480', moduleRes: [384, 216], brightness: 800, refreshRate: 3840, technology: 'COB Display', warranty: 1, maxPowerPerSqm: 400 },
    'P1.86_COB': { name: 'P1.86 COB', series: 'Indoor COB', type: 'indoor', endUserRate: 13800, moduleSize: '320x160', cabinetSize: '640x480', moduleRes: [384, 216], brightness: 800, refreshRate: 3840, technology: 'COB Display', warranty: 1, maxPowerPerSqm: 400 },

    // ---- INDOOR SMD ----
    'P1.25_SMD': { name: 'P1.25 SMD', series: 'Indoor SMD', type: 'indoor', endUserRate: 13500, moduleSize: '320x160', cabinetSize: '640x480', moduleRes: [256, 128], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 400 },
    'P1.5_SMD': { name: 'P1.5 SMD', series: 'Indoor SMD', type: 'indoor', endUserRate: 12500, moduleSize: '320x160', cabinetSize: '640x480', moduleRes: [208, 104], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 400 },
    'P1.8_SMD': { name: 'P1.8 SMD', series: 'Indoor SMD', type: 'indoor', endUserRate: 9500, moduleSize: '320x160', cabinetSize: '640x480', moduleRes: [174, 87], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 400 },
    'P2': { name: 'P2', series: 'Indoor SMD', type: 'indoor', endUserRate: 8500, moduleSize: '320x160', cabinetSize: '640x640', moduleRes: [160, 80], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 400 },
    'P2.5': { name: 'P2.5', series: 'Indoor SMD', type: 'indoor', endUserRate: 6500, moduleSize: '320x160', cabinetSize: '640x640', moduleRes: [128, 64], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 350 },
    'P3': { name: 'P3', series: 'Indoor SMD', type: 'indoor', endUserRate: 6000, moduleSize: '320x160', cabinetSize: '640x640', moduleRes: [64, 64], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 350 },
    'P4': { name: 'P4', series: 'Indoor SMD', type: 'indoor', endUserRate: 4500, moduleSize: '320x160', cabinetSize: '640x640', moduleRes: [80, 40], brightness: 800, refreshRate: 3840, technology: 'SMD Display', warranty: 1, maxPowerPerSqm: 350 },

    // ---- INDOOR FLEXIBLE ----
    'P1.5_Flex': { name: 'P1.5 Flexible', series: 'Indoor Flexible', type: 'indoor', endUserRate: 13500, moduleSize: '320x160', cabinetSize: '500x1000', moduleRes: [213, 106], brightness: 800, refreshRate: 3840, technology: 'Flexible SMD', warranty: 1, maxPowerPerSqm: 400 },
    'P1.8_Flex': { name: 'P1.8 Flexible', series: 'Indoor Flexible', type: 'indoor', endUserRate: 12500, moduleSize: '320x160', cabinetSize: '500x1000', moduleRes: [177, 88], brightness: 800, refreshRate: 3840, technology: 'Flexible SMD', warranty: 1, maxPowerPerSqm: 400 },
    'P2_Flex': { name: 'P2 Flexible', series: 'Indoor Flexible', type: 'indoor', endUserRate: 10500, moduleSize: '320x160', cabinetSize: '500x1000', moduleRes: [160, 80], brightness: 800, refreshRate: 3840, technology: 'Flexible SMD', warranty: 1, maxPowerPerSqm: 400 },
    'P2.5_Flex': { name: 'P2.5 Flexible', series: 'Indoor Flexible', type: 'indoor', endUserRate: 9500, moduleSize: '320x160', cabinetSize: '500x1000', moduleRes: [128, 64], brightness: 800, refreshRate: 3840, technology: 'Flexible SMD', warranty: 1, maxPowerPerSqm: 350 },

    // ---- OUTDOOR ----
    'P2.5O': { name: 'P2.5 Outdoor', series: 'Outdoor Screen', type: 'outdoor', endUserRate: 8300, moduleSize: '320x160', cabinetSize: '960x960', moduleRes: [128, 64], brightness: 6000, refreshRate: 3840, technology: 'Outdoor SMD', warranty: 1, maxPowerPerSqm: 500 },
    'P3O': { name: 'P3 Outdoor', series: 'Outdoor Screen', type: 'outdoor', endUserRate: 6500, moduleSize: '320x160', cabinetSize: '960x960', moduleRes: [104, 52], brightness: 6000, refreshRate: 3840, technology: 'Outdoor SMD', warranty: 1, maxPowerPerSqm: 450 },
    'P4O': { name: 'P4 Outdoor', series: 'Outdoor Screen', type: 'outdoor', endUserRate: 4700, moduleSize: '320x160', cabinetSize: '960x960', moduleRes: [80, 40], brightness: 6000, refreshRate: 3840, technology: 'Outdoor SMD', warranty: 1, maxPowerPerSqm: 450 },
    'P6O': { name: 'P6 Outdoor', series: 'Outdoor Screen', type: 'outdoor', endUserRate: 4300, moduleSize: '192x192', cabinetSize: '960x960', moduleRes: [32, 32], brightness: 6000, refreshRate: 3840, technology: 'Outdoor SMD', warranty: 1, maxPowerPerSqm: 350 },
    'P10O': { name: 'P10 Outdoor', series: 'Outdoor Screen', type: 'outdoor', endUserRate: 3600, moduleSize: '320x160', cabinetSize: '960x960', moduleRes: [32, 16], brightness: 6000, refreshRate: 3840, technology: 'Outdoor SMD', warranty: 1, maxPowerPerSqm: 350 }
};

const powerConsumptionData = {
    indoor: {
        "P1.25": { max: 586, avg: 195 },
        "P1.538": { max: 488, avg: 163 },
        "P1.839": { max: 488, avg: 163 },
        "P2": { max: 488, avg: 163 },
        "P2.5": { max: 488, avg: 163 },
        "P2.6": { max: 675, avg: 202 },
        "P2.9": { max: 480, avg: 144 },
        "P3": { max: 543, avg: 180 },
        "P3.076": { max: 488, avg: 163 },
        "P3.91": { max: 500, avg: 150 },
        "P4": { max: 488, avg: 163 }
    },

    outdoor: {
        "P2.5": { max: 879, avg: 264 },
        "P2.60": { max: 675, avg: 202 },
        "P3.076": { max: 879, avg: 264 },
        "P3.910": { max: 630, avg: 189 },
        "P4.810": { max: 540, avg: 162 },
        "P4": { max: 879, avg: 264 },
        "P5": { max: 879, avg: 264 },
        "P6": { max: 895, avg: 269 },
        "P6.66": { max: 879, avg: 264 },
        "P8": { max: 879, avg: 264 },
        "P10": { max: 645, avg: 195 }
    }
};

const mediaPlayerData = [
    { model: "TB2 (Cloud)", series: "TB", maxPixels: 650000, endUserRate: 20000, maxWidth: 1920, maxHeight: 1080, videoDecoding: "1080P", cloudBased: true },
    { model: "VX 1.3 (Non-Cloud)", series: "VX", maxPixels: 1300000, endUserRate: 25000, maxWidth: 3840, maxHeight: 1920, videoDecoding: "HD", cloudBased: false },
    { model: "TB40 (Cloud)", series: "TB", maxPixels: 1300000, endUserRate: 30000, maxWidth: 4096, maxHeight: 4096, videoDecoding: "4K", cloudBased: true },
    { model: "TB60 (Cloud)", series: "TB", maxPixels: 2300000, endUserRate: 45000, maxWidth: 4096, maxHeight: 4096, videoDecoding: "4K", cloudBased: true },
    { model: "DSP400 Pro (Non-Cloud)", series: "DSP", maxPixels: 2600000, endUserRate: 70000, maxWidth: 10240, maxHeight: 8192, videoDecoding: "4K", cloudBased: false },
    { model: "SMP 4 Pro", series: "SMP", maxPixels: 2600000, endUserRate: 45000, maxWidth: 4096, maxHeight: 1920, videoDecoding: "4K", cloudBased: false },
    { model: "DSP600 Pro (Non-Cloud)", series: "DSP", maxPixels: 3900000, endUserRate: 85000, maxWidth: 10240, maxHeight: 8192, videoDecoding: "4K", cloudBased: false },
    { model: "SMP 6 Pro", series: "SMP", maxPixels: 3900000, endUserRate: 58000, maxWidth: 4096, maxHeight: 1920, videoDecoding: "4K", cloudBased: false },
    { model: "VX1000 Pro (Non-Cloud)", series: "VX", maxPixels: 6500000, endUserRate: 125000, maxWidth: 10240, maxHeight: 8192, videoDecoding: "4K", cloudBased: false }
];

function updateLocationFilters() {
    const indoorCheck = document.getElementById('indoorCheck').checked;
    const outdoorCheck = document.getElementById('outdoorCheck').checked;
    const pixelPitchSelect = document.getElementById('pixelPitch');

    pixelPitchSelect.innerHTML = '<option value="">Choose pixel pitch...</option>';

    if (!indoorCheck && !outdoorCheck) return;

    if (indoorCheck) {
        const indoorGroup = document.createElement('optgroup');
        indoorGroup.label = '🏢 Indoor Options';

        Object.entries(pricingData).forEach(([pitch, data]) => {
            if (data.type === 'indoor') {
                const option = document.createElement('option');
                option.value = pitch;
                option.textContent = `${pitch}mm - ${data.name}`;
                indoorGroup.appendChild(option);
            }
        });

        pixelPitchSelect.appendChild(indoorGroup);
    }

    if (outdoorCheck) {
        const outdoorGroup = document.createElement('optgroup');
        outdoorGroup.label = '🌞 Outdoor Options';

        Object.entries(pricingData).forEach(([pitch, data]) => {
            if (data.type === 'outdoor') {
                const option = document.createElement('option');
                option.value = pitch;
                option.textContent = `${pitch}mm - ${data.name}`;
                outdoorGroup.appendChild(option);
            }
        });

        pixelPitchSelect.appendChild(outdoorGroup);
    }
}

function recommendPixelPitch(distance) {
    if (distance <= 2) return ['0.7', '0.93', '1.17'];
    if (distance <= 3) return ['1.17', '1.25', '1.56'];
    if (distance <= 5) return ['1.56', '1.86', '2.0'];
    if (distance <= 8) return ['2.0', '2.5', '3.0'];
    if (distance <= 12) return ['3.0', '4.0'];
    if (distance <= 20) return ['4.0', '5.0', '6.0'];
    return ['6.0', '6.67'];
}

document.getElementById('viewingDistance').addEventListener('input', function () {
    const distance = parseFloat(this.value);
    if (distance && distance > 0) {
        const recommendations = recommendPixelPitch(distance);
        const recBox = document.getElementById('recommendationBox');
        const recText = document.getElementById('recommendationText');

        const pitchNames = recommendations.map(p => {
            const data = pricingData[p];
            return data ? `${p}mm (${data.name})` : `${p}mm`;
        }).join(', ');

        recText.textContent = `Based on ${distance}m viewing distance, we recommend: ${pitchNames}`;
        recBox.classList.add('active');
    } else {
        document.getElementById('recommendationBox').classList.remove('active');
    }
});

document.getElementById('customerEmail').addEventListener('input', function () {
    const emailHelper = document.getElementById('emailHelper');
    if (this.value && !this.value.includes('@')) {
        this.classList.add('invalid');
        emailHelper.classList.add('error');
        emailHelper.textContent = 'Email must contain @';
    } else {
        this.classList.remove('invalid');
        emailHelper.classList.remove('error');
        emailHelper.textContent = 'Must contain @';
    }
});

document.getElementById('customerPhone').addEventListener('input', function () {
    const phoneHelper = document.getElementById('phoneHelper');
    this.value = this.value.replace(/\D/g, '');

    if (this.value.length > 0 && this.value.length !== 10) {
        this.classList.add('invalid');
        phoneHelper.classList.add('error');
        phoneHelper.textContent = `${this.value.length}/10 digits - Must be exactly 10`;
    } else {
        this.classList.remove('invalid');
        phoneHelper.classList.remove('error');
        phoneHelper.textContent = 'Exactly 10 digits required';
    }
});

function validateInputs() {
    const name = document.getElementById('customerName').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const location = document.getElementById('location').value.trim();
    const indoorCheck = document.getElementById('indoorCheck').checked;
    const outdoorCheck = document.getElementById('outdoorCheck').checked;
    const viewingDistance = document.getElementById('viewingDistance').value;
    const pixelPitch = document.getElementById('pixelPitch').value;
    const width = document.getElementById('screenWidth').value;
    const height = document.getElementById('screenHeight').value;

    if (!name || !email || !phone || !location || !viewingDistance || !pixelPitch || !width || !height) {
        return 'USER INPUT INVALID - All fields are required';
    }

    if (!email.includes('@')) {
        return 'USER INPUT INVALID - Email must contain @';
    }

    if (phone.length !== 10 || !/^\d{10}$/.test(phone)) {
        return 'USER INPUT INVALID - Phone number must be exactly 10 digits';
    }

    if (!indoorCheck && !outdoorCheck) {
        return 'USER INPUT INVALID - Please select Indoor or Outdoor installation type';
    }

    return null;
}

// ================= PIXEL PITCH DATA =================
const pixelPitchData = {

    indoor: {
        "P1.25": { module: "320x160", res: [256, 128] },
        "P1.538": { module: "320x160", res: [208, 104] },
        "P1.839": { module: "320x160", res: [174, 87] },
        "P2": { module: "320x160", res: [160, 80] },
        "P2.5": { module: "320x160", res: [128, 64] },
        "P2.6": { module: "250x250", res: [96, 96] },
        "P2.9": { module: "250x250", res: [64, 64] },
        "P3": { module: "192x192", res: [64, 64] },
        "P3.076": { module: "320x160", res: [104, 52] },
        "P3.91": { module: "250x250", res: [64, 64] },
        "P4": { module: "320x160", res: [80, 40] }
    },
    outdoor: {
        "P2.5": { module: "320x160", res: [128, 64] },
        "P2.60": { module: "250x250", res: [96, 96] },
        "P3.076": { module: "320x160", res: [104, 52] },
        "P3.910": { module: "250x250", res: [64, 64] },
        "P4": { module: "320x160", res: [80, 40] },
        "P4.810": { module: "250x250", res: [52, 52] },
        "P5": { module: "320x160", res: [64, 32] },
        "P6": { module: "192x192", res: [32, 32] },
        "P6.66": { module: "320x160", res: [48, 24] },
        "P8": { module: "320x160", res: [40, 20] },
        "P10": { module: "320x160", res: [32, 16] }
    }
};

let selectedModuleResolution = { w: 0, h: 0 };

function calculateGCD(a, b) {
    return b === 0 ? a : calculateGCD(b, a % b);
}

function recommendMediaPlayers(totalPixels, resWidth, resHeight) {
    // Find the first (smallest) player that can handle the screen
    let firstMatch = null;

    for (let i = 0; i < mediaPlayerData.length; i++) {
        const player = mediaPlayerData[i];

        if (totalPixels <= player.maxPixels &&
            resWidth <= player.maxWidth &&
            resHeight <= player.maxHeight) {
            firstMatch = player;
            break; // Found the smallest capacity that works
        }
    }

    // If no match found, return the highest spec player
    if (!firstMatch) {
        return [mediaPlayerData[mediaPlayerData.length - 1]];
    }

    // Now find ALL players with the SAME capacity as the first match
    const matchingPlayers = [];
    const targetCapacity = firstMatch.maxPixels;

    for (let i = 0; i < mediaPlayerData.length; i++) {
        const player = mediaPlayerData[i];

        // Same capacity AND can handle the dimensions
        if (player.maxPixels === targetCapacity &&
            totalPixels <= player.maxPixels &&
            resWidth <= player.maxWidth &&
            resHeight <= player.maxHeight) {
            matchingPlayers.push(player);
        }
    }

    return matchingPlayers;
}

function calculateConfiguration(modelData, desiredWidth, desiredHeight, pixelPitch, cabinetsH, cabinetsV, structureRequired) {
    // Parse cabinet size (e.g., "960x960")
    const cabinetParts = modelData.cabinetSize.split('x');
    const cabinetWidthMm = parseFloat(cabinetParts[0]);
    const cabinetHeightMm = parseFloat(cabinetParts[1]);

    // Parse module size (e.g., "320x160")
    const moduleSizeParts = modelData.moduleSize.split('x');
    const moduleWidthMm = parseFloat(moduleSizeParts[0]);
    const moduleHeightMm = parseFloat(moduleSizeParts[1]);

    // How many modules per cabinet
    const modulesPerCabinetH = Math.round(cabinetWidthMm / moduleWidthMm);
    const modulesPerCabinetV = Math.round(cabinetHeightMm / moduleHeightMm);

    // Total modules across the whole screen
    const totalModulesH = cabinetsH * modulesPerCabinetH;
    const totalModulesV = cabinetsV * modulesPerCabinetV;

    // Actual screen size = cabinets × cabinet dimensions
    const actualWidthMm = cabinetsH * cabinetWidthMm;
    const actualHeightMm = cabinetsV * cabinetHeightMm;

    const screenAreaSqM = (actualWidthMm / 1000) * (actualHeightMm / 1000);

    // Calculate resolution based on module resolution and total modules
    const moduleResWidth = modelData.moduleRes[0];
    const moduleResHeight = modelData.moduleRes[1];
    const resolutionWidth = moduleResWidth * totalModulesH;
    const resolutionHeight = moduleResHeight * totalModulesV;
    const totalPixels = resolutionWidth * resolutionHeight;

    const gcd = calculateGCD(resolutionWidth, resolutionHeight);
    const aspectW = resolutionWidth / gcd;
    const aspectH = resolutionHeight / gcd;
    let aspectRatio = `${aspectW}:${aspectH}`;

    if (Math.abs(aspectW / aspectH - 16 / 9) < 0.1) aspectRatio = '16:9';
    else if (Math.abs(aspectW / aspectH - 4 / 3) < 0.1) aspectRatio = '4:3';
    else if (Math.abs(aspectW / aspectH - 21 / 9) < 0.1) aspectRatio = '21:9';

    const diagonalMm = Math.sqrt(Math.pow(actualWidthMm, 2) + Math.pow(actualHeightMm, 2));

    // Look up exact power consumption if available
    let powerData = { max: modelData.maxPowerPerSqm, avg: modelData.maxPowerPerSqm * 0.33 };
    const typeKey = modelData.type;
    const pitchKey = pixelPitch.replace('O', '');

    if (powerConsumptionData[typeKey] && powerConsumptionData[typeKey][pitchKey]) {
        powerData = powerConsumptionData[typeKey][pitchKey];
    }

    const maxPowerWatts = screenAreaSqM * powerData.max;
    const avgPowerWatts = screenAreaSqM * powerData.avg;

    // kW and kVA calculation
    const totalMaxKW = maxPowerWatts / 1000;
    const totalAvgKW = avgPowerWatts / 1000;

    const powerFactor = 0.8;
    const totalMaxKVA = totalMaxKW / powerFactor;
    const totalAvgKVA = totalAvgKW / powerFactor;

    const matchingProcessors = recommendMediaPlayers(totalPixels, resolutionWidth, resolutionHeight);

    const selectedProcessor = matchingProcessors[0];
    let controller = matchingProcessors.map(p => p.model).join(' OR ');
    let controllerCost = selectedProcessor.endUserRate;

    const screenAreaSqFt = screenAreaSqM * 10.7639;
    const installationRatePerSqFt = 200;
    const structureRatePerSqFt = 500;

    const installationCost = screenAreaSqFt * installationRatePerSqFt;
    const structureCost = structureRequired ? screenAreaSqFt * structureRatePerSqFt : 0;

    const screenCostBase = screenAreaSqFt * modelData.endUserRate;
    const subtotal = screenCostBase + controllerCost + installationCost + structureCost;
    const totalGST = subtotal * 0.18;
    const grandTotal = subtotal + totalGST;

    const widthDiff = actualWidthMm - desiredWidth;
    const heightDiff = actualHeightMm - desiredHeight;
    const fitsWithin = widthDiff <= 0 && heightDiff <= 0;

    return {
        actualDimensions: { width: actualWidthMm, height: actualHeightMm },
        widthDifference: widthDiff,
        heightDifference: heightDiff,
        fitsWithin: fitsWithin,
        screenArea: screenAreaSqM,
        aspectRatio: aspectRatio,
        diagonal: diagonalMm,
        resolution: { width: resolutionWidth, height: resolutionHeight },
        moduleResolution: { width: moduleResWidth, height: moduleResHeight },
        cabinets: { horizontal: cabinetsH, vertical: cabinetsV, total: cabinetsH * cabinetsV },
        modules: { horizontal: totalModulesH, vertical: totalModulesV, total: totalModulesH * totalModulesV },
        cabinetSize: modelData.cabinetSize,
        controller: controller,
        maxPower: maxPowerWatts,
        avgPowerWatts: avgPowerWatts,
        totalMaxKW: totalMaxKW,
        totalMaxKVA: totalMaxKVA,
        screenCost: screenCostBase,
        controllerCost: controllerCost,
        installationCost: installationCost,
        installationRate: installationRatePerSqFt,
        structureCost: structureCost,
        structureRate: structureRatePerSqFt,
        structureRequired: structureRequired,
        screenAreaSqFt: screenAreaSqFt,
        gst: totalGST,
        total: grandTotal
    };
}

function calculateQuote() {
    const validationError = validateInputs();
    if (validationError) {
        showError(validationError);
        return;
    }

    const name = document.getElementById('customerName').value.trim();
    const email = document.getElementById('customerEmail').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const location = document.getElementById('location').value.trim();
    const viewingDistance = parseFloat(document.getElementById('viewingDistance').value);
    const pixelPitch = document.getElementById('pixelPitch').value;
    const desiredWidth = parseFloat(document.getElementById('screenWidth').value);
    const desiredHeight = parseFloat(document.getElementById('screenHeight').value);
    const structureRequired = document.getElementById('structureRequired').value === 'yes';

    // Add logic here based on new pixelPitchData mapping for more accurate configuration if needed
    const typeKey = document.getElementById('indoorCheck').checked ? 'indoor' : 'outdoor';
    const pitchKey = pixelPitch.replace('O', '');

    if (pixelPitchData[typeKey] && pixelPitchData[typeKey][pitchKey]) {
        const cfg = pixelPitchData[typeKey][pitchKey];
        selectedModuleResolution = { w: cfg.res[0], h: cfg.res[1] };
    }

    const modelData = pricingData[pixelPitch];
    if (!modelData) {
        showError('USER INPUT INVALID - Invalid pixel pitch selected');
        return;
    }

    // Parse CABINET size for screen dimension calculation
    const cabinetParts = modelData.cabinetSize.split('x');
    const cabinetWidthMm = parseFloat(cabinetParts[0]);
    const cabinetHeightMm = parseFloat(cabinetParts[1]);

    // POLYMATH DUAL CONFIGURATION CALCULATION with cabinets
    // OPTION A: Fits WITHIN user dimensions (floor)
    const cabinetsH_A = Math.max(1, Math.floor(desiredWidth / cabinetWidthMm));
    const cabinetsV_A = Math.max(1, Math.floor(desiredHeight / cabinetHeightMm));

    // OPTION B: Optimal fit (ceil - may slightly exceed)
    const cabinetsH_B = Math.max(1, Math.ceil(desiredWidth / cabinetWidthMm));
    const cabinetsV_B = Math.max(1, Math.ceil(desiredHeight / cabinetHeightMm));

    const configA = calculateConfiguration(modelData, desiredWidth, desiredHeight, pixelPitch, cabinetsH_A, cabinetsV_A, structureRequired);
    const configB = calculateConfiguration(modelData, desiredWidth, desiredHeight, pixelPitch, cabinetsH_B, cabinetsV_B, structureRequired);

    const widthDiff = Math.abs(configA.widthDifference);
    const heightDiff = Math.abs(configA.heightDifference);

    // If both configurations are exactly identical
    const sameConfig = (cabinetsH_A === cabinetsH_B && cabinetsV_A === cabinetsV_B);

    displayResults({
        customerName: name,
        customerEmail: email,
        customerPhone: phone,
        location: location,
        viewingDistance: viewingDistance,
        pixelPitch: pixelPitch,
        modelData: modelData,
        desiredDimensions: { width: desiredWidth, height: desiredHeight },
        optionA: configA,
        optionB: configB,
        sameConfiguration: sameConfig
    });

    setTimeout(() => {
        document.getElementById('resultsCard').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

function displayResults(data) {
    document.getElementById('resultsCard').classList.add('active');

    // Store for later use
    window.currentQuote = data;
    window.selectedOption = 'A'; // Default selection

    // If both configurations are the same, show only one
    if (data.sameConfiguration) {
        displaySingleConfiguration(data, data.optionA);
    } else {
        displayDualConfiguration(data);
    }
}

function displaySingleConfiguration(data, config) {
    const resultsHTML = `
        <h2 class="card-title">Professional Quotation - Perfect Fit!</h2>
        
        <div class="perfect-fit-banner">
            ✨ Perfect Match! Your desired dimensions align perfectly with module configuration ✨
        </div>

        <div class="results-grid">
            <div class="result-item">
                <div class="result-label">Actual Screen Size</div>
                <div class="result-value">${config.actualDimensions.width} × ${config.actualDimensions.height} mm</div>
            </div>
            <div class="result-item">
                <div class="result-label">Screen Area</div>
                <div class="result-value">${config.screenAreaSqFt.toFixed(2)} sq.ft</div>
            </div>
            <div class="result-item">
                <div class="result-label">Aspect Ratio</div>
                <div class="result-value">${config.aspectRatio}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Screen Diagonal</div>
                <div class="result-value">${(config.diagonal * 0.0393701).toFixed(2)} inches</div>
            </div>
            <div class="result-item">
                <div class="result-label">Resolution</div>
                <div class="result-value">${config.resolution.width} × ${config.resolution.height}</div>
            </div>
            <div class="result-item">
                <div class="result-label">Cabinets Required</div>
                <div class="result-value">${config.cabinets.total} (${config.cabinets.horizontal}×${config.cabinets.vertical}) - ${config.cabinetSize} mm</div>
            </div>
            <div class="result-item">
                <div class="result-label">Total Max Load</div>
                <div class="result-value">${config.totalMaxKVA.toFixed(2)} kVA</div>
            </div>
            <div class="result-item">
                <div class="result-label">Total Max Power</div>
                <div class="result-value">${config.totalMaxKW.toFixed(2)} kW</div>
            </div>
            <div class="result-item">
                <div class="result-label">Total Price (Incl. GST)</div>
                <div class="result-value highlight">₹${formatCurrency(config.total)}</div>
            </div>
        </div>
    `;

    document.getElementById('resultsCard').innerHTML = resultsHTML + getCommonHTML(data, config);
}

function displayDualConfiguration(data) {
    const resultsHTML = `
        <h2 class="card-title">Choose Your Perfect Configuration</h2>
        
        <div class="config-selector">
            <div class="config-info">
                <strong>Your Desired Size:</strong> ${data.desiredDimensions.width} mm × ${data.desiredDimensions.height} mm
            </div>
        </div>

        <div class="dual-config-container">
            <div class="config-option ${data.optionA.fitsWithin ? 'recommended' : ''}" id="optionA" onclick="selectConfiguration('A')">
                <div class="config-badge">OPTION A</div>
                ${data.optionA.fitsWithin ? '<div class="fit-badge">✓ Fits Within Your Space</div>' : ''}
                
                <div class="config-title">Conservative Fit</div>
                <div class="config-subtitle">Guaranteed to fit within your dimensions</div>

                <div class="config-highlight-box">
                    <div class="config-dimension-display">
                        <div class="dimension-value">${data.optionA.actualDimensions.width} × ${data.optionA.actualDimensions.height}</div>
                        <div class="dimension-label">Actual Screen Size (mm)</div>
                        ${!data.optionA.fitsWithin ? `
                            <div class="dimension-diff warning">
                                +${Math.abs(data.optionA.widthDifference)} mm width, +${Math.abs(data.optionA.heightDifference)} mm height
                            </div>
                        ` : `
                            <div class="dimension-diff success">
                                ${Math.abs(data.optionA.widthDifference)} mm under width, ${Math.abs(data.optionA.heightDifference)} mm under height
                            </div>
                        `}
                    </div>
                </div>

                <div class="config-specs-grid">
                    <div class="spec-mini">
                        <span class="spec-mini-label">Area</span>
                        <span class="spec-mini-value">${data.optionA.screenAreaSqFt.toFixed(2)} sq.ft</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Resolution</span>
                        <span class="spec-mini-value">${data.optionA.resolution.width}×${data.optionA.resolution.height}</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Cabinets</span>
                        <span class="spec-mini-value">${data.optionA.cabinets.total} (${data.optionA.cabinets.horizontal}×${data.optionA.cabinets.vertical})</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Max Load</span>
                        <span class="spec-mini-value">${data.optionA.totalMaxKVA.toFixed(2)} kVA</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Max Power</span>
                        <span class="spec-mini-value">${data.optionA.totalMaxKW.toFixed(2)} kW</span>
                    </div>
                </div>

                <div class="config-price-box">
                    <div class="config-price-label">Total Price (Incl. GST)</div>
                    <div class="config-price-value">₹${formatCurrency(data.optionA.total)}</div>
                </div>

                <div class="select-config-btn">Select Configuration A</div>
            </div>

            <div class="config-option ${!data.optionA.fitsWithin && data.optionB.fitsWithin ? 'recommended' : ''}" id="optionB" onclick="selectConfiguration('B')">
                <div class="config-badge">OPTION B</div>
                ${!data.optionA.fitsWithin && data.optionB.fitsWithin ? '<div class="fit-badge">✓ Optimal Fit</div>' : ''}
                ${!data.optionB.fitsWithin ? '<div class="fit-badge exceeds">⚠ Slightly Exceeds</div>' : ''}
                
                <div class="config-title">Optimal Coverage</div>
                <div class="config-subtitle">Closest match to your desired size</div>

                <div class="config-highlight-box">
                    <div class="config-dimension-display">
                        <div class="dimension-value">${data.optionB.actualDimensions.width} × ${data.optionB.actualDimensions.height}</div>
                        <div class="dimension-label">Actual Screen Size (mm)</div>
                        ${data.optionB.fitsWithin ? `
                            <div class="dimension-diff success">
                                ${Math.abs(data.optionB.widthDifference)} mm under width, ${Math.abs(data.optionB.heightDifference)} mm under height
                            </div>
                        ` : `
                            <div class="dimension-diff warning">
                                +${data.optionB.widthDifference} mm width, +${data.optionB.heightDifference} mm height
                            </div>
                        `}
                    </div>
                </div>

                <div class="config-specs-grid">
                    <div class="spec-mini">
                        <span class="spec-mini-label">Area</span>
                        <span class="spec-mini-value">${data.optionB.screenAreaSqFt.toFixed(2)} sq.ft</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Resolution</span>
                        <span class="spec-mini-value">${data.optionB.resolution.width}×${data.optionB.resolution.height}</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Cabinets</span>
                        <span class="spec-mini-value">${data.optionB.cabinets.total} (${data.optionB.cabinets.horizontal}×${data.optionB.cabinets.vertical})</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Max Load</span>
                        <span class="spec-mini-value">${data.optionB.totalMaxKVA.toFixed(2)} kVA</span>
                    </div>
                    <div class="spec-mini">
                        <span class="spec-mini-label">Max Power</span>
                        <span class="spec-mini-value">${data.optionB.totalMaxKW.toFixed(2)} kW</span>
                    </div>
                </div>

                <div class="config-price-box">
                    <div class="config-price-label">Total Price (Incl. GST)</div>
                    <div class="config-price-value">₹${formatCurrency(data.optionB.total)}</div>
                </div>

                <div class="select-config-btn">Select Configuration B</div>
            </div>
        </div>

        <div id="selectedConfigDetails"></div>
    `;

    document.getElementById('resultsCard').innerHTML = resultsHTML;

    // Auto-select Option A by default
    selectConfiguration('A');
}

function selectConfiguration(option) {
    window.selectedOption = option;
    const selectedConfig = option === 'A' ? window.currentQuote.optionA : window.currentQuote.optionB;

    // Update UI
    document.getElementById('optionA').classList.remove('selected');
    document.getElementById('optionB').classList.remove('selected');
    document.getElementById(`option${option}`).classList.add('selected');

    // Display detailed specs for selected configuration
    const detailsHTML = getCommonHTML(window.currentQuote, selectedConfig);
    document.getElementById('selectedConfigDetails').innerHTML = detailsHTML;
}

function getCommonHTML(data, config) {
    return `
        <div class="model-info" style="margin-top: 40px;">
            <div class="model-info-title">Technical Specifications - ${data.modelData.name}</div>
            <div class="model-specs">
                <div class="spec-item">
                    <span class="spec-label">Model Name</span>
                    <span class="spec-value">${data.modelData.name}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Pixel Pitch</span>
                    <span class="spec-value">${data.pixelPitch}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Module Size</span>
                    <span class="spec-value">${data.modelData.moduleSize} mm</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Cabinet Size</span>
                    <span class="spec-value">${data.modelData.cabinetSize} mm</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Module Resolution</span>
                    <span class="spec-value">${config.moduleResolution.width} × ${config.moduleResolution.height} pixels</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Max Brightness</span>
                    <span class="spec-value">${data.modelData.brightness} nits</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Refresh Rate</span>
                    <span class="spec-value">${data.modelData.refreshRate} Hz</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Display Technology</span>
                    <span class="spec-value">${data.modelData.technology}</span>
                </div>
                <div class="spec-item">
                    <span class="spec-label">Warranty Period</span>
                    <span class="spec-value">${data.modelData.warranty} Years</span>
                </div>
            </div>
        </div>

        <div class="pricing-steps">
            <div class="pricing-steps-title">Detailed Pricing Breakdown</div>
            
            <div class="pricing-step">
                <div class="step-number">1</div>
                <div class="step-content">
                    <div class="step-label">LED Screen Cost</div>
                    <div class="step-detail">${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(data.modelData.endUserRate)}/sq.ft</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.screenCost)}</div>
            </div>

            <div class="pricing-step">
                <div class="step-number">2</div>
                <div class="step-content">
                    <div class="step-label">Video Processor (${config.controller})</div>
                    <div class="step-detail">For ${(config.resolution.width * config.resolution.height / 1000000).toFixed(2)}M pixels</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.controllerCost)}</div>
            </div>

            ${config.structureRequired ? `
            <div class="pricing-step">
                <div class="step-number">3</div>
                <div class="step-content">
                    <div class="step-label">Structure Rate (Wall Mount)</div>
                    <div class="step-detail">${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(config.structureRate)}/sq.ft</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.structureCost)}</div>
            </div>` : ''}

            <div class="pricing-step">
                <div class="step-number">${config.structureRequired ? '4' : '3'}</div>
                <div class="step-content">
                    <div class="step-label">Professional Installation</div>
                    <div class="step-detail">${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(config.installationRate)}/sq.ft</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.installationCost)}</div>
            </div>

            <div class="pricing-step">
                <div class="step-number">${config.structureRequired ? '5' : '4'}</div>
                <div class="step-content">
                    <div class="step-label">GST (18% on All Items)</div>
                    <div class="step-detail">18% on ₹${formatCurrency(config.screenCost + config.controllerCost + config.installationCost + config.structureCost)}</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.gst)}</div>
            </div>

            <div class="pricing-step total-step">
                <div class="step-number">✓</div>
                <div class="step-content">
                    <div class="step-label">Total Project Cost</div>
                    <div class="step-detail">Complete LED Video Wall Solution</div>
                </div>
                <div class="step-amount">₹${formatCurrency(config.total)}</div>
            </div>
        </div>

        <div class="action-buttons">
            <button type="button" class="btn-action" onclick="downloadQuote()">
                📄 Download Quote (PDF)
            </button>
            <button type="button" class="btn-action" onclick="emailQuote()">
                📧 Email Quote
            </button>
        </div>

        <div class="success-message" id="successMessage"></div>
    `;
}

function formatCurrency(amount) {
    return amount.toLocaleString('en-IN', {
        maximumFractionDigits: 0,
        minimumFractionDigits: 0
    });
}

function showError(message) {
    const errorDiv = document.getElementById('errorMessage');
    errorDiv.textContent = message;
    errorDiv.classList.add('active');

    setTimeout(() => {
        errorDiv.classList.remove('active');
    }, 5000);
}

function showSuccess(message) {
    const successDiv = document.getElementById('successMessage');
    successDiv.textContent = message;
    successDiv.classList.add('active');

    setTimeout(() => {
        successDiv.classList.remove('active');
    }, 5000);
}

function generateTextOutput(data) {
    const currentDate = new Date().toLocaleDateString('en-IN', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    const config = window.selectedOption === 'A' ? data.optionA : data.optionB;
    const configName = window.selectedOption === 'A' ? 'Option A - Conservative Fit' : 'Option B - Optimal Coverage';
    const fitsStatus = config.fitsWithin ? 'Fits within your space' : 'Slightly exceeds requested dimensions';

    return `===============================================================================
            RCS DISPLAY SOLUTIONS
   Professional LED Video Wall Quotation
===============================================================================

Quotation Date: ${currentDate}
Quotation Generated by: RCS Display Pro Quotation Tool

-------------------------------------------------------------------------------
                CUSTOMER INFORMATION
-------------------------------------------------------------------------------

Customer Name        : ${data.customerName}
Email Address        : ${data.customerEmail}
Phone Number         : ${data.customerPhone}
Installation Location: ${data.location}
Viewing Distance     : ${data.viewingDistance} meters

-------------------------------------------------------------------------------
            CONFIGURATION SELECTED
-------------------------------------------------------------------------------

Selected Configuration: ${configName}
Fit Status           : ${fitsStatus}

Your Requested Size  : ${data.desiredDimensions.width} mm × ${data.desiredDimensions.height} mm

${!data.sameConfiguration ? `
AVAILABLE CONFIGURATIONS:
• Option A (Conservative): ${data.optionA.actualDimensions.width} × ${data.optionA.actualDimensions.height} mm - ${data.optionA.fitsWithin ? 'Fits Within' : 'Exceeds'} - ₹${formatCurrency(data.optionA.total)}
• Option B (Optimal)     : ${data.optionB.actualDimensions.width} × ${data.optionB.actualDimensions.height} mm - ${data.optionB.fitsWithin ? 'Fits Within' : 'Exceeds'} - ₹${formatCurrency(data.optionB.total)}
` : ''}
-------------------------------------------------------------------------------
                SCREEN SPECIFICATIONS
-------------------------------------------------------------------------------

Model Name           : ${data.modelData.name}
Pixel Pitch          : ${data.pixelPitch}
Installation Type    : ${data.modelData.type.toUpperCase()}

SCREEN DIMENSIONS:
  - Actual Size      : ${config.actualDimensions.width} × ${config.actualDimensions.height} mm
  - Screen Area      : ${config.screenAreaSqFt.toFixed(2)} sq.ft
  - Screen Diagonal  : ${(config.diagonal * 0.0393701).toFixed(2)} inches
  - Aspect Ratio     : ${config.aspectRatio}
${!config.fitsWithin ? `  - Note: Exceeds input by ${config.widthDifference} mm width, ${config.heightDifference} mm height` : `  - Clearance: ${Math.abs(config.widthDifference)} mm width, ${Math.abs(config.heightDifference)} mm height`}

DISPLAY SPECIFICATIONS:
  - Resolution       : ${config.resolution.width} × ${config.resolution.height} pixels
  - Cabinet Size     : ${config.cabinetSize} mm
  - Cabinet Config   : ${config.cabinets.horizontal} × ${config.cabinets.vertical} (${config.cabinets.total} cabinets)
  - Module Size      : ${data.modelData.moduleSize} mm
  - Module Config    : ${config.modules.horizontal} × ${config.modules.vertical} (${config.modules.total} modules)
  - Module Resolution: ${config.moduleResolution.width} × ${config.moduleResolution.height} pixels per module
  - Max Brightness   : ${data.modelData.brightness} nits
  - Refresh Rate     : ${data.modelData.refreshRate} Hz
  - Technology       : ${data.modelData.technology}
  - Total Max Load   : ${config.totalMaxKVA.toFixed(2)} kVA
  - Total Max Power  : ${config.totalMaxKW.toFixed(2)} kW
  - Warranty         : ${data.modelData.warranty} Years

-------------------------------------------------------------------------------
                PRICING BREAKDOWN
-------------------------------------------------------------------------------

1. LED SCREEN COST
   ${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(data.modelData.endUserRate)}/sq.ft
   Amount: ₹${formatCurrency(config.screenCost)}

2. VIDEO PROCESSOR (${config.controller})
   For ${(config.resolution.width * config.resolution.height / 1000000).toFixed(2)} million pixels
   Amount: ₹${formatCurrency(config.controllerCost)}

${config.structureRequired ? `3. STRUCTURE RATE (WALL MOUNT)
   ${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(config.structureRate)}/sq.ft
   Amount: ₹${formatCurrency(config.structureCost)}

4. PROFESSIONAL INSTALLATION` : '3. PROFESSIONAL INSTALLATION'}
   ${config.screenAreaSqFt.toFixed(2)} sq.ft @ ₹${formatCurrency(config.installationRate)}/sq.ft
   Amount: ₹${formatCurrency(config.installationCost)}

${config.structureRequired ? '5' : '4'}. GST (18% on All Items)
   18% on ₹${formatCurrency(config.screenCost + config.controllerCost + config.installationCost + config.structureCost)}
   Amount: ₹${formatCurrency(config.gst)}

-------------------------------------------------------------------------------
                TOTAL PROJECT COST
-------------------------------------------------------------------------------

GRAND TOTAL (Including GST): ₹${formatCurrency(config.total)}

===============================================================================

NOTES:
- This quotation is valid for 30 days from the date of issue
- Installation includes complete setup and calibration
- Warranty covers manufacturing defects and component failures
${!config.fitsWithin ? '- Selected configuration slightly exceeds requested dimensions for optimal coverage' : '- Selected configuration fits comfortably within your space'}
- Please contact RCS Display Solutions for any clarifications

Thank you for choosing RCS Display Solutions.

===============================================================================

Generated by RCS Display Pro Quotation Tool | RCS Display Solutions
For official quotation on company letterhead, please contact our sales team.

===============================================================================

NEXT STEPS:
Please send this quotation details to RCS Display Solutions sales team.
They will prepare and send you the official quotation on company letterhead.`;
}

function downloadQuote() {
    if (!window.currentQuote) {
        showError('USER INPUT INVALID - Please generate a quote first');
        return;
    }

    try {
        showSuccess('⏳ Generating PDF...');

        const quote = window.currentQuote;
        const config = window.selectedOption === 'A' ? quote.optionA : quote.optionB;

        // Using jsPDF library directly - most reliable PDF generation method
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const pageWidth = doc.internal.pageSize.getWidth();
        const pageHeight = doc.internal.pageSize.getHeight();
        const margin = 15;

        // --- WATERMARK IMAGE ---
        const watermarkB64 = "data:image/jpeg;base64," + "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4ml1VYproEaAT01Je6cmnQ31DXSRXdMSjp5id/PAAAAVVrVV0qpicu0DPZUqc7pTJrdRTC590WxMX/NWlSSKboke/d3sacvOOjI5x0Y52OjHLM2DPqmJJi6ptmc+gG3ErbKtreoGXciYNnoee6HTkC+IAAAADFlxRPNTE4+gA6Tm+kvz5Rpy+ef6LBXXnUxl2iEzd0fuc+nYM+vCqLctyy5qMuzyIuAAAABd0l15vzU734p0gAAAARm83tss/o14wAAHM9NzNN/Az6gAAABuK6t1nzacoXxBNbT3FPl2SK6suLMr0dNc4teLmp29TLuBIAAACVzOefYNeLTob6hp1SKbpiUdPMTt54SAAAVVrVV0qpicu0AAABsa5GXDIBLNhtpzsxtxAAAVdT0vOZdUCu6Jg6HZprnXhVtlWlQMu5EwbPQ890OnIF8QAAAAGLKhyk9HNOnm3Ryc30sZbZyLYgmupuqw025qejmL826QUXQ4stsvQtmx5BU1/TRTblnQ61dadZeYtXrHJKqm825zpbTYWxC1PFbaotzOPqdem3PLfDGlc3pidBZ7ExSb9vktliyl8AAAAHM9NhrpzbpFdebdJBzjoxzjpfZzu5cJz19gtkEgAK2m6jHTbnHRovzme89IyjTnaW6ief1eqxV25pd4K61awRNes80xTbdzmtlrbJbAJadB1OOmvNukRpzc9GMsmnMAAAAqrXxFuXno1N+cdGOcdGOcdGOcdGOcdGOcdHJzbpBzfSxmtmFsgAAFDfY635l0au3OOjk57pPGW2U11j4mnMOjU6ObdIKTosWW2IWoAAAAAAAACAAASAAACAASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACASAAAACASAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//aAAwDAQACAAMAAAAhUc8888888888888888888888888888888888888888888888888888ccNX888888888888888888888888888888kowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwxw428xz6xxwwwQwwwnhjFW+88888888888888888888888888888IAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHP/ahxxxxGoZHMAAAAA7K1xAY88888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGQAiCCCCCCCCCCCUkAAAQoWJtxA88888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZ6CCCCCCCCCCCCCCCdLAQjZdyRB88888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAByDCCCCGGOCCCCCCCCCD3kU2OKAVE88888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAAAANrACCCCCK2yiCCCCCCCCCQBNAADD8888888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAAAUCCACCCCSi2uCCCCCCCCCCCAaCCAE8888888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAACQACCCCCGCCC++CCCCCCCCCCCQXJAE8888888888888888888888888888888oAAAAAAAAAAAAAAAAAAAAAAAAAANqCCCiAe+ua7/ANGRSRggggggggg7AhPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAAAAqTrgAAPvrtwAgAAAEoCiggAAgggbglPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAAACPvvgrjlu8YAAAAAAAAAM/SgggggIogPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAAAEwFvvvvpgAAAAAAAAAAAAEoQAggggowPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAAAVQilmsFAQAAAAAAAAAAAAAE1wAggglBfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAAE3vtvvmggAAAAAAAAAAAAAAAERwgggUgfPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPIAAAAAAAAAAAAAAAAAAAAAAAABPdPPuuQAAAAAAAAAAAAAAAAAEggghGQPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPKAAAAAAAAAAAAAAAAAAAAAAAABdVPPO4AAAAAAAAAAAAAAAAAAEbwAgtAPP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";
        // Try to set transparency (GState works in jsPDF 2.x)
        try {
            doc.setGState(new doc.GState({ opacity: 0.15 }));
        } catch (e) { }

        // Add centered watermark
        // A4 center is pageWidth/2, pageHeight/2
        const wmW = 140;
        const wmH = 140 * (736 / 1408);
        doc.addImage(watermarkB64, 'JPEG', (pageWidth - wmW) / 2, (pageHeight - wmH) / 2.3, wmW, wmH);

        // Reset transparency
        try {
            doc.setGState(new doc.GState({ opacity: 1.0 }));
        } catch (e) { }

        const maxWidth = pageWidth - (2 * margin);
        let yPosition = 15;

        // Header with ocean blue background
        doc.setFillColor(0, 119, 182); // bright-teal-blue #0077b6
        doc.rect(0, 0, pageWidth, 28, 'F');

        // White text on blue background
        doc.setTextColor(255, 255, 255);
        doc.setFontSize(20);
        doc.setFont(undefined, 'bold');
        doc.text('RCS Display Solutions', pageWidth / 2, 12, { align: 'center' });

        doc.setFontSize(10);
        doc.setFont(undefined, 'normal');
        doc.text('Professional LED Screen Quotation', pageWidth / 2, 22, { align: 'center' });

        yPosition = 35;

        // Helper function for sections
        const addSection = (title) => {
            doc.setTextColor(3, 4, 94); // deep-twilight #03045e
            doc.setFont(undefined, 'bold');
            doc.setFontSize(12);
            doc.text(title, margin, yPosition);
            yPosition += 8;
        };

        const addLine = (label, value, fontSize = 10, isBold = false) => {
            // Check if we need a new page
            if (yPosition > pageHeight - 20) {
                doc.addPage();
                yPosition = 20;
            }

            doc.setTextColor(2, 62, 138); // french-blue #023e8a
            doc.setFontSize(fontSize);
            doc.setFont(undefined, isBold ? 'bold' : 'normal');

            // Label on left, value on right
            doc.text(label, margin, yPosition);
            doc.text(value, pageWidth - margin, yPosition, { align: 'right' });
            yPosition += 6;
        };

        const addDivider = () => {
            doc.setDrawColor(173, 232, 244); // frosted-blue-2 #ade8f4
            doc.line(margin, yPosition, pageWidth - margin, yPosition);
            yPosition += 3;
        };

        // Customer Information Section
        addSection('CUSTOMER INFORMATION');
        addLine('Name:', quote.customerName);
        addLine('Email:', quote.customerEmail);
        addLine('Phone:', quote.customerPhone);
        addLine('Location:', quote.location);
        yPosition += 3;

        // Screen Specifications Section
        addSection('SCREEN SPECIFICATIONS');
        addLine('Model:', quote.modelData.name);
        addLine('Pixel Pitch:', quote.pixelPitch);
        addLine('Dimensions:', `${config.actualDimensions.width} × ${config.actualDimensions.height} mm`);
        addLine('Screen Area:', `${config.screenAreaSqFt.toFixed(2)} sq.ft`);
        addLine('Resolution:', `${config.resolution.width} × ${config.resolution.height} pixels`);
        addLine('Brightness:', `${quote.modelData.brightness} nits`);
        addLine('Refresh Rate:', `${quote.modelData.refreshRate} Hz`);
        addLine('Technology:', quote.modelData.technology);
        addLine('Total Max Load:', `${config.totalMaxKVA.toFixed(2)} kVA`);
        addLine('Total Max Power:', `${config.totalMaxKW.toFixed(2)} kW`);
        addLine('Warranty:', `${quote.modelData.warranty} Years`);
        yPosition += 3;

        // Pricing Breakdown Section
        addSection('PRICING BREAKDOWN');
        addLine('1. LED Screen Cost', `Rs. ${formatCurrency(config.screenCost)}`);

        // Sub detail in smaller font
        doc.setTextColor(0, 150, 199); // blue-green #0096c7
        doc.setFontSize(8);
        doc.text(`${config.screenAreaSqFt.toFixed(2)} sq.ft @ Rs. ${formatCurrency(quote.modelData.endUserRate)}/sq.ft`, margin + 5, yPosition);
        yPosition += 4;

        doc.setTextColor(2, 62, 138); // french-blue #023e8a
        addLine('2. Video Processor', `Rs. ${formatCurrency(config.controllerCost)}`);
        if (config.structureRequired) {
            addLine('3. Structure Rate', `Rs. ${formatCurrency(config.structureCost)}`);
            addLine('4. Professional Installation', `Rs. ${formatCurrency(config.installationCost)}`);
            addLine('5. GST (18%)', `Rs. ${formatCurrency(config.gst)}`);
        } else {
            addLine('3. Professional Installation', `Rs. ${formatCurrency(config.installationCost)}`);
            addLine('4. GST (18%)', `Rs. ${formatCurrency(config.gst)}`);
        }

        yPosition += 2;

        // Total with ocean blue highlight box
        doc.setFillColor(0, 119, 182); // bright-teal-blue #0077b6
        doc.rect(margin, yPosition - 2, maxWidth, 10, 'F');

        doc.setTextColor(255, 255, 255);
        doc.setFont(undefined, 'bold');
        doc.setFontSize(12);
        doc.text('TOTAL PROJECT COST', margin + 3, yPosition + 3);
        doc.text(`Rs. ${formatCurrency(config.total)}`, pageWidth - margin - 3, yPosition + 3, { align: 'right' });

        yPosition += 15;

        // Footer Information
        doc.setTextColor(0, 150, 199); // blue-green #0096c7
        doc.setFontSize(9);
        doc.setFont(undefined, 'normal');

        const footerText = `This is a preliminary quotation generated by the RCS Display Solutions quotation tool. A display specialist will contact you shortly at ${quote.customerPhone} to discuss your project requirements and provide an official quotation.`;
        const wrappedFooter = doc.splitTextToSize(footerText, maxWidth);
        doc.text(wrappedFooter, margin, yPosition);

        yPosition += (wrappedFooter.length * 4) + 5;

        // Copyright
        doc.setFontSize(8);
        doc.setTextColor(150, 163, 184);
        doc.text(`© ${new Date().getFullYear()} RCS Display Solutions. All rights reserved.`, pageWidth / 2, pageHeight - 10, { align: 'center' });

        // Save the PDF
        const fileName = `RCS_Quote_${quote.customerName.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;
        doc.save(fileName);

        showSuccess('✅ PDF Downloaded successfully!');

    } catch (err) {
        console.error("PDF generation failed:", err);
        showError('❌ Failed to generate PDF. Please try again.');
    }
}

function closeTextModal() {
    document.getElementById('textOutputModal').classList.remove('active');
}

function copyToClipboard() {
    const textContent = document.getElementById('textOutputContent').textContent;
    navigator.clipboard.writeText(textContent).then(() => {
        showSuccess('✅ Copied to clipboard! Send to RCS Display for official letterhead version.');
    }).catch(() => {
        showError('Failed to copy. Please select and copy manually.');
    });
}

async function emailQuote() {
    if (!window.currentQuote) {
        alert('Please generate a quote first!');
        return;
    }

    const quote = window.currentQuote;

    // Show a "sending" indicator
    try {
        showSuccess('⏳ Sending email... please wait.');
    } catch (e) { }

    // Send the quote via EmailJS
    const result = await sendEmailJSQuote(quote);

    if (result.success) {
        alert(`✅ Quotation sent successfully!\n\nEmail sent to: ${quote.customerEmail}\n\nPlease check your inbox (and spam folder).`);
        try { showSuccess(`✅ Official Quotation sent to ${quote.customerEmail}`); } catch (e) { }
    } else {
        alert(`❌ Failed to send email!\n\nError: ${result.error}\n\nPlease check your EmailJS setup (Service ID, Template ID, Public Key) and make sure the template has {{to_email}} in the To Email field.`);
        try { showError(`❌ Email failed: ${result.error}`); } catch (e) { }
    }
}

async function sendEmailJSQuote(quote) {
    // === HOW TO SET UP EMAILJS ===
    // 1. Create a free account at https://www.emailjs.com/
    // 2. Add an Email Service (e.g., Gmail) -> Get your Service ID
    // 3. Create an Email Template -> Get your Template ID
    // 4. Go to Account -> Get your Public Key
    // 5. Paste them all below:

    const PUBLIC_KEY = "qts_tpyepw7nwm5Ns";
    const SERVICE_ID = "service_tn24kjt";
    const TEMPLATE_ID = "template_ryactn7";

    const config = window.selectedOption === 'A' ? quote.optionA : quote.optionB;
    const configName = window.selectedOption === 'A' ? 'Option A - Conservative Fit' : 'Option B - Optimal Coverage';

    // Initialize EmailJS
    emailjs.init(PUBLIC_KEY);

    // These parameters must match the {{variables}} you create in your EmailJS Template!
    const templateParams = {
        to_email: quote.customerEmail,
        to_name: quote.customerName,
        customer_phone: quote.customerPhone,
        location: quote.location,
        model_name: quote.modelData.name,
        pixel_pitch: quote.pixelPitch,
        configuration: configName,
        actual_size: `${config.actualDimensions.width} x ${config.actualDimensions.height} mm`,
        screen_area: `${config.screenAreaSqFt.toFixed(2)} sq.ft`,
        resolution: `${config.resolution.width} × ${config.resolution.height}`,
        total_max_load: `${config.totalMaxKVA.toFixed(2)} kVA`,
        total_max_power: `${config.totalMaxKW.toFixed(2)} kW`,
        screen_cost: `₹${formatCurrency(config.screenCost)}`,
        controller_cost: `₹${formatCurrency(config.controllerCost)}`,
        structure_cost: config.structureRequired ? `₹${formatCurrency(config.structureCost)}` : 'N/A',
        installation_cost: `₹${formatCurrency(config.installationCost)}`,
        gst_amount: `₹${formatCurrency(config.gst)}`,
        total_price: `₹${formatCurrency(config.total)}`,
        reply_to: quote.customerEmail
    };

    console.log("[EmailJS] Attempting to send with params:", templateParams);

    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
        console.log("[EmailJS] Success!", response.status, response.text);
        return { success: true };
    } catch (error) {
        console.error("[EmailJS] Failed:", error);
        const errorMsg = error?.text || error?.message || JSON.stringify(error);
        return { success: false, error: errorMsg };
    }
}

window.addEventListener('load', function () {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease-in';
        document.body.style.opacity = '1';
    }, 100);
});

// Close modal on outside click
document.getElementById('textOutputModal').addEventListener('click', function (e) {
    if (e.target === this) {
        closeTextModal();
    }
});

// Theme Toggle Logic
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    const iconLight = themeToggle.querySelector('.theme-icon-light');
    const iconDark = themeToggle.querySelector('.theme-icon-dark');

    // Check for saved theme
    const savedTheme = localStorage.getItem('rcs-theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        iconLight.style.display = 'none';
        iconDark.style.display = 'inline';
    }

    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        if (currentTheme === 'dark') {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('rcs-theme', 'light');
            iconLight.style.display = 'inline';
            iconDark.style.display = 'none';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('rcs-theme', 'dark');
            iconLight.style.display = 'none';
            iconDark.style.display = 'inline';
        }
    });
});