<script setup lang="ts">
import { ref } from 'vue';
import * as monaco from 'monaco-editor';
import CodeEditor from '../components/CodeEditor.vue';
import IFramePreview from '../components/IFramePreview.vue';
const codeContent = ref('');
const editorMounted = (editor: monaco.editor.IStandaloneCodeEditor) => {
    console.log('editor实例加载完成', editor)
}
</script>

<template>
    <div class="container">
        <CodeEditor class="editor" v-model="codeContent" language="javascript" theme="vs-dark"
            @editor-mounted="editorMounted"></CodeEditor>
        <IFramePreview></IFramePreview>
    </div>
</template>

<style scoped>
.container {
    height: 100%;
    overflow: auto;
    display: flex;
}

.editor {
    flex: 1;
    height: 100%;
}

.preview {
    flex: 1;
    height: 100%;
}
</style>
