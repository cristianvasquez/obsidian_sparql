/*
THIS IS A GENERATED/BUNDLED FILE BY ROLLUP
if you want to view the source visit the plugins github repository
*/

'use strict';

var obsidian = require('obsidian');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

const VARIANTS = {
    'turtle/rdf': {
        lang: 'turtle',
    },
    'turtle': {
        lang: 'turtle',
    },
};
function extract(lines, lineNumber, variants = VARIANTS) {
    let begin = null;
    let end = null;
    let lang = null;
    function equals(line, target) {
        let str = line.trim();
        return str.toUpperCase() === target.toUpperCase();
    }
    /**
     * if it's the start of a supported fence, return the language.
     * @param line
     */
    function fenceOpeningWithKey(line) {
        for (let key of Object.keys(variants)) {
            if (equals(line, '```' + key)) {
                return key;
            }
        }
        return null;
    }
    for (let i = lineNumber; i >= 0; i--) {
        let key = fenceOpeningWithKey(lines[i]);
        if (key) {
            begin = i;
            lang = key;
            break;
        }
        else if (i !== lineNumber && equals(lines[i], '```')) {
            begin = null;
            lang = null;
            break;
        }
    }
    for (let i = lineNumber; i < lines.length; i++) {
        if (i !== begin && equals(lines[i], '```')) {
            end = i;
            break;
        }
    }
    if ((begin != null) && (end != null)) {
        return {
            lang: lang,
            text: lines.slice(begin + 1, end).join('\n'),
            begin: begin,
            end: end,
        };
    }
    return null;
}
/**
 * Extracts everything that is a supported fence.
 * @param src
 * @param variants
 */
function extract_all(src, variants = VARIANTS) {
    let lines = src.split('\n');
    let result = [];
    for (let i = 0; i < lines.length; i++) {
        let current = extract(lines, i, variants);
        if (current) {
            i = current.end + 1;
            result.push(current);
        }
    }
    return result;
}

function serialize(data) {
    return JSON.stringify(data);
}

const PLUGIN_NAME = 'Literate-RDF';
const DEFAULT_SETTINGS = {
    mySetting: 'default'
};
class MyPlugin extends obsidian.Plugin {
    onload() {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`loading ${PLUGIN_NAME} plugin`);
            yield this.loadSettings();
            this.addCommand({
                id: 'extract-current-note-rdf',
                name: 'Extract RDF from current note',
                callback: () => this.extractCurrent(),
            });
        });
    }
    extractCurrent() {
        const view = this.app.workspace.activeLeaf.view;
        if (view instanceof obsidian.MarkdownView) {
            // Do work here
            const editor = view.editor;
            let document = editor.getDoc().getValue();
            editor.getCursor().line;
            console.log(extract_all(document));
            let data = extract_all(document);
            let turtle = serialize(data);
            new FeedbackModal(this.app, turtle).open();
        }
    }
    onunload() {
        console.log(`unloading ${PLUGIN_NAME} plugin`);
    }
    loadSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            this.settings = Object.assign({}, DEFAULT_SETTINGS, yield this.loadData());
        });
    }
    saveSettings() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.saveData(this.settings);
        });
    }
}
class FeedbackModal extends obsidian.Modal {
    constructor(app, data) {
        super(app);
        this.data = data;
    }
    onOpen() {
        let { contentEl } = this;
        contentEl.setText(`${this.data}`);
    }
    onClose() {
        let { contentEl } = this;
        contentEl.empty();
    }
}

module.exports = MyPlugin;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsInNyYy9leHRyYWN0LnRzIiwic3JjL3NlcmlhbGl6ZS50cyIsInNyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpudWxsLCJuYW1lcyI6WyJQbHVnaW4iLCJNYXJrZG93blZpZXciLCJNb2RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXVEQTtBQUNPLFNBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRTtBQUM3RCxJQUFJLFNBQVMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sS0FBSyxZQUFZLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsVUFBVSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNoSCxJQUFJLE9BQU8sS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLE9BQU8sQ0FBQyxFQUFFLFVBQVUsT0FBTyxFQUFFLE1BQU0sRUFBRTtBQUMvRCxRQUFRLFNBQVMsU0FBUyxDQUFDLEtBQUssRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7QUFDbkcsUUFBUSxTQUFTLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE1BQU0sQ0FBQyxDQUFD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
