/**
 * Define a set of template paths to pre-load
 * 
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * 
 * @returns {Promise}
 */
export const preloadHandlebarsTemplates = async function () {
    const templatePaths = [
        // Actor Sheet Partials
        "systems/starpg/templates/actors/parts/actor-traits.html",
        "systems/starpg/templates/actors/parts/actor-inventory.html",
        "systems/starpg/templates/actors/parts/actor-inventory-item.html",
        "systems/starpg/templates/actors/parts/actor-features.html",
        "systems/starpg/templates/actors/parts/actor-features-item.html",
        "systems/starpg/templates/actors/parts/actor-spellbook.html",
        "systems/starpg/templates/actors/parts/actor-modifiers.html",

        // Item Sheet Partials
        "systems/starpg/templates/items/parts/item-action.html",
        "systems/starpg/templates/items/parts/item-activation.html",
        "systems/starpg/templates/items/parts/item-description.html",
        "systems/starpg/templates/items/parts/item-capacity.html",
        "systems/starpg/templates/items/parts/item-modifiers.html",
        "systems/starpg/templates/items/parts/item-header.html",
        "systems/starpg/templates/items/parts/physical-item-details.html",
        "systems/starpg/templates/items/parts/container-details.html"
    ];

    return loadTemplates(templatePaths);
};
