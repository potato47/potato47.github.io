<template>
    <div ref="codeEditBox" class="codeEditBox"></div>
</template>
​
<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref, watch } from 'vue';
import './userWorker';
import * as monaco from 'monaco-editor';

const props = defineProps<{
    modelValue?: string,
    language: string,
    theme?: string,
    options?: any,
}>();
const emit = defineEmits(['update:modelValue', 'change', 'editor-mounted']);

let editor: monaco.editor.IStandaloneCodeEditor;
const codeEditBox = ref();

const init = () => {
    monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
        noSemanticValidation: true,
        noSyntaxValidation: false
    });
    monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
        moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
        module: monaco.languages.typescript.ModuleKind.CommonJS,
        noEmit: true,
        typeRoots: ["node_modules/@types"]
    });

    monaco.languages.typescript.javascriptDefaults.addExtraLib([
        // Trial code
        'declare class Rectangle1 {',

        '    static ():top',
        '    static ():left',
        '    static ():right',
        '}',
    ].join('\n'));


    var jsCode = [
        '"use strict";',
        '',
        "Rectangle1.top = {",

        " console.log('Rectangle top');",

        "}"
    ].join('\n');

    monaco.languages.typescript.javascriptDefaults.addExtraLib('declare const mm = {a:1}')
    editor = monaco.editor.create(codeEditBox.value, {
        value: props.modelValue,
        language: props.language,
        theme: props.theme,
        automaticLayout: true,
        ...props.options,
    });

    // 监听值的变化
    editor.onDidChangeModelContent(() => {
        const value = editor.getValue(); //给父组件实时返回最新文本
        emit('update:modelValue', value);
        emit('change', value);
    });

    emit('editor-mounted', editor);
    watch(
        () => props.modelValue,
        newValue => {
            if (editor) {
                const value = editor.getValue();
                if (newValue !== value) {
                    editor.setValue(newValue!);
                }
            }
        }
    );

    watch(
        () => props.options,
        newValue => {
            editor.updateOptions(newValue);
        },
        { deep: true }
    );

    watch(
        () => props.language,
        newValue => {
            monaco.editor.setModelLanguage(editor.getModel()!, newValue);
        }
    );
}

onBeforeUnmount(() => {
    editor.dispose();
});

onMounted(() => {
    init();
});

</script>
​
<style scoped>
.codeEditBox {
    width: 100%;
    height: 100%;
}
</style>
