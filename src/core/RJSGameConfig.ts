import {IGameConfig} from 'phaser-ce';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface i18nInterface {

    background: string;
    langs: any;
    current?: string;
}

export interface RJSGameConfig extends IGameConfig {
    name: string;
    w: number;
    h: number;
    backgroundColor: number;
    loadingScreen: {
        minTime?: number;
        background: string;
        loadingBar: {
            asset: string;
            position: {
                x: number;
                y: number;
            };
            direction: number;
            size: {
                w: number;
                h: number;
            };
            fullBar?: string;
        };
        fade: boolean;
    };
    // logChoices: boolean;
    parent: string;
    fonts: string;
    scaleMode: number;
    userScale: (scale: any,parent: any) => any;
    guiConfig: string;
    storySetup: string;
    storyConfig: string;
    storyAccessibility: string;
    storyText: string[];
    i18n?: i18nInterface;
    debugMode?: boolean;
}

export interface StoryConfig extends IGameConfig {
    positions: any;

    // miliseconds for fade transitions
    fadetime: number;
    skiptime: number;
    autotime: number;
    timeout: number;
    punctuationMarks?: string[];
    punctuationWait?: number;
    charPerSfx?: any;
    // wether the game keeps a log of the player choices for replay purposes
    logChoices: boolean;
    logText: boolean;
    lazyloading: boolean;
    precomputeBreakLines: boolean;
    transitions: {
        defaults: {
            characters: string;
            backgrounds: string;
            cgs: string;
            music: string;
        };
        say: string;
        visualChoices: string;
        textChoices: string;
        messageBox: string;
        nameBox: string;
        menus: string;
        skippable: boolean;
    };
    userPreferences?: {
        textSpeed: number;
        autoSpeed: number;
        bgmv: number;
        sfxv: number;
        muted: boolean;
    };
}