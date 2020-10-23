export const registerSystemSettings = function () {
    game.settings.register("starpg", "diagonalMovement", {
        name: "SFRPG.SFRPGDiagN",
        hint: "SFRPG.SFRPGDiagL",
        scope: "world",
        config: true,
        default: "5105",
        type: String,
        choices: {
            "5105": "SFRPG.SFRPGDiagCore",
            "555": "SFRPG.SFRPGOptional"
        },
        onChange: rule => canvas.grid.diagonalRule = rule
    });

    game.settings.register("starpg", "disableExperienceTracking", {
        name: "SFRPG.SFRPGNoExpN",
        hint: "SFRPG.SFRPGNoExpL",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

    game.settings.register("starpg", "useAdvantageDisadvantage", {
        name: "SFRPG.SFRPGUseAdvantageDisadvantage",
        hint: "SFRPG.SFRPGUseAdvantageDisadvantageHint",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });

    game.settings.register("starpg", "autoCollapseItemCards", {
        name: "SFRPG.SettingsAutoCollapseCardName",
        hint: "SFRPG.SettingsAutoCollapseCardHint",
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
        onChange: s => {
            ui.chat.render();
        }
    });

    game.settings.register("starpg", "worldSchemaVersion", {
        name: "SFRPG.SettingsWorldSchemaVersionName",
        hint: "SFRPG.SettingsWorldSchemaVersionHint",
        scope: "world",
        config: false,
        default: 0,
        type: Number
    });

    game.settings.register("starpg", "useCustomChatCard", {
        name: "SFRPG.SettingsUseCustomChatCard",
        hint: "SFRPG.SettingsUseCustomChatCardHint",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    game.settings.register("starpg", "useStarfinderAOETemplates", {
        name: "SFRPG.SettingsUseStarfinderAOETemplates",
        hint: "SFRPG.SettingsUseStarfinderAOETemplatesHint",
        scope: "world",
        config: true,
        default: true,
        type: Boolean
    });

    game.settings.register("starpg", "useQuickRollAsDefault", {
        name: "SFRPG.SettingsUseQuickRollAsDefault",
        hint: "SFRPG.SettingsUseQuickRollAsDefaultHint",
        scope: "world",
        config: true,
        default: false,
        type: Boolean
    });
};