import RJS from '../../core/RJS';
import { Graphics, Button } from 'phaser-ce';
export default class ChoiceHandler extends Graphics {
    game: RJS;
    config: {
        asset: string;
        x: number;
        y: number;
        alignment: string;
        separation: number;
        chosenColor: string;
        transition?: string;
        sfx: string;
        text: {
            x: number;
            y: number;
            width: number;
            height: number;
            lineSpacing?: number;
            style: any;
        };
        background?: {
            x: number;
            y: number;
            asset: string;
        };
    };
    boxes: Button[];
    constructor(game: RJS, config: any);
    show(choices: any[]): Promise<any>;
    createChoiceBox(choice: any, x: any, y: any, index: any, totalChoices: any, resolve: any): Button;
    hide(transitionName?: any): Promise<any>;
    destroy(): void;
}
