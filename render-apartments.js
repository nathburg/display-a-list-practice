export function renderApartments(apartment) {
    const apartmentEl = document.createElement('div');
    const addressEl = document.createElement('p');
    const squareFootageEl = document.createElement('p');
    const tenantsEl = document.createElement('div');

    addressEl.textContent = `This apartment is located at ${apartment.address}.`;
    squareFootageEl.textContent = `It is ${apartment.squareFootage} square feet.`;
    tenantsEl.textContent = `The current tenants are:`;

    for (let tenant of apartment.tenants) {
        const tenantEl = document.createElement('p');
        tenantEl.textContent = `${tenant.name}, who is age ${tenant.age} and works as ${tenant.job}.`;
        tenantsEl.append(tenantEl);
    }

    apartmentEl.append(addressEl);
    apartmentEl.append(squareFootageEl);
    apartmentEl.append(tenantsEl);
    
    return apartmentEl;
}