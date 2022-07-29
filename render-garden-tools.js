export function renderGardenTools(tool) {
    const pTag = document.createElement('p');
    pTag.textContent = tool;
    pTag.classList.add('garden-tool');

    return pTag;
};