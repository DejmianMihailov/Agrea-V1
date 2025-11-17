// Dosage Calculator for Agro Products

// Initialize calculator
document.addEventListener('DOMContentLoaded', function() {
    const calculatorForm = document.getElementById('dosage-calculator-form');
    const productSelect = document.getElementById('product-select');
    
    // Populate product select
    if (productSelect && typeof productsData !== 'undefined') {
        const pesticideProducts = productsData.filter(p => p.category === 'препарати');
        pesticideProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = `${product.name} - ${product.price.toFixed(2)} лв/${product.unit}`;
            option.setAttribute('data-price', product.price);
            option.setAttribute('data-unit', product.unit);
            productSelect.appendChild(option);
        });
        
        // Auto-fill dosage when product is selected
        productSelect.addEventListener('change', function() {
            const selectedOption = this.options[this.selectedIndex];
            if (selectedOption.value) {
                // You can add default dosage values here if available
                // For now, we'll just show a hint
            }
        });
    }
    
    // Handle form submission
    if (calculatorForm) {
        calculatorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            calculateDosage();
        });
    }
});

function calculateDosage() {
    const area = parseFloat(document.getElementById('area').value);
    const areaUnit = document.getElementById('area-unit').value;
    const dosage = parseFloat(document.getElementById('dosage').value);
    const dosageUnit = document.getElementById('dosage-unit').value;
    const sprayerVolume = parseFloat(document.getElementById('sprayer-volume').value) || 200;
    const productSelect = document.getElementById('product-select');
    const selectedProductId = productSelect.value;
    
    if (!area || !dosage) {
        alert('Моля, попълнете всички задължителни полета!');
        return;
    }
    
    // Convert area to decares if needed
    let areaInDka = area;
    if (areaUnit === 'ha') {
        areaInDka = area * 10; // 1 ha = 10 dka
    }
    
    // Calculate product amount based on dosage unit
    let productAmount = 0;
    let productUnit = '';
    
    if (dosageUnit === 'ml-dka') {
        productAmount = areaInDka * dosage;
        productUnit = 'мл';
    } else if (dosageUnit === 'g-dka') {
        productAmount = areaInDka * dosage;
        productUnit = 'г';
    } else if (dosageUnit === 'l-ha') {
        productAmount = (areaInDka / 10) * dosage;
        productUnit = 'л';
    } else if (dosageUnit === 'kg-ha') {
        productAmount = (areaInDka / 10) * dosage;
        productUnit = 'кг';
    }
    
    // Calculate water amount (standard: 200-400 l/dka)
    const waterPerDka = 300; // Average water consumption
    const waterAmount = areaInDka * waterPerDka;
    
    // Calculate sprayer loads
    const sprayerLoads = Math.ceil(waterAmount / sprayerVolume);
    
    // Calculate estimated price if product is selected
    let estimatedPrice = null;
    if (selectedProductId && typeof productsData !== 'undefined') {
        const product = productsData.find(p => p.id === parseInt(selectedProductId));
        if (product) {
            // Extract price per unit
            const unitMatch = product.unit.match(/(\d+)\s*(мл|л|г|кг)/);
            if (unitMatch) {
                const unitAmount = parseFloat(unitMatch[1]);
                const unitType = unitMatch[2];
                
                // Convert product amount to match product unit
                let convertedAmount = productAmount;
                if (productUnit === 'мл' && unitType === 'л') {
                    convertedAmount = productAmount / 1000;
                } else if (productUnit === 'г' && unitType === 'кг') {
                    convertedAmount = productAmount / 1000;
                } else if (productUnit === 'л' && unitType === 'мл') {
                    convertedAmount = productAmount * 1000;
                } else if (productUnit === 'кг' && unitType === 'г') {
                    convertedAmount = productAmount * 1000;
                }
                
                const unitsNeeded = convertedAmount / unitAmount;
                estimatedPrice = unitsNeeded * product.price;
            }
        }
    }
    
    // Display results
    const resultsDiv = document.getElementById('calculator-results');
    document.getElementById('product-amount').textContent = `${productAmount.toFixed(2)} ${productUnit}`;
    document.getElementById('water-amount').textContent = `${waterAmount.toFixed(0)} л`;
    document.getElementById('sprayer-loads').textContent = `${sprayerLoads} зареждания`;
    
    if (estimatedPrice !== null) {
        document.getElementById('estimated-price').textContent = `${estimatedPrice.toFixed(2)} лв`;
    } else {
        document.getElementById('estimated-price').textContent = 'Изберете продукт за цена';
    }
    
    resultsDiv.classList.remove('hidden');
    resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

