<template>
    <div v-if="editor">
        <bubble-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor.isActive('bold') }">
                bold
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor.isActive('italic') }">
                italic
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor.isActive('strike') }">
                strike
            </button>
        </bubble-menu>

        <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor">
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }">
                H1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
                H2
            </button>
            <button @click="editor.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor.isActive('bulletList') }">
                Bullet List
            </button>
        </floating-menu>

        <div id="tiptap_nav">
            <el-space wrap>
                <!-- 颜色 -->
                <input type="color" @input="editor.chain().focus().setColor($event.target.value).run()"
                    :value="editor.getAttributes('textStyle').color">

                <!-- 代码块 -->
                <button @click="editor.chain().focus().toggleCodeBlock().run()"
                    :class="{ 'is-active': editor.isActive('codeBlock') }">
                    toggleCodeBlock
                </button>
                <button @click="editor.chain().focus().setCodeBlock().run()" :disabled="editor.isActive('codeBlock')">
                    setCodeBlock
                </button>

                <!-- 水平线 -->
                <button @click="editor.chain().focus().setHorizontalRule().run()">
                    setHorizontalRule
                </button>

                <!-- 撤销，重做 -->
                <button @click="editor.chain().focus().undo().run()" :disabled="!editor.can().undo()">
                    undo
                </button>
                <button @click="editor.chain().focus().redo().run()" :disabled="!editor.can().redo()">
                    redo
                </button>


                <!-- 文本位置 -->
                <button @click="editor.chain().focus().setTextAlign('left').run()" :class="{
                    'is-active': editor.isActive({
                        textAlign: 'left'
                    })
                }">
                    left
                </button>
                <button @click="editor.chain().focus().setTextAlign('center').run()"
                    :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }">
                    center
                </button>
                <button @click="editor.chain().focus().setTextAlign('right').run()"
                    :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }">
                    right
                </button>
                <button @click="editor.chain().focus().setTextAlign('justify').run()"
                    :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }">
                    justify
                </button>
                <button @click="editor.chain().focus().unsetTextAlign().run()">
                    unsetTextAlign
                </button>
                <TiptapTips></TiptapTips>

            </el-space>
        </div>


        <editor-content :editor="editor" />
    </div>
</template>

<script setup>
import { onBeforeUnmount, ref } from 'vue'
import { Editor, EditorContent, BubbleMenu, FloatingMenu } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import TextAlign from '@tiptap/extension-text-align'
import Code from '@tiptap/extension-code'
import Typography from '@tiptap/extension-typography'
import HorizontalRule from '@tiptap/extension-horizontal-rule'
import { Color } from '@tiptap/extension-color'
import Heading from '@tiptap/extension-heading'
import Link from '@tiptap/extension-link'
import TiptapTips from '../../help/TiptapTips.vue'
// import History from '@tiptap/extension-history'
// import CodeBlock from '@tiptap/extension-code-block'
// import Highlight from '@tiptap/extension-highlight'

const test = () => {
    console.log('test')
}

const getCurJson = ()=>{
    return editor.getJSON()
}

const getCurHtml = ()=>{
    return editor.getHTML()
}

const editor = new Editor({
    content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    extensions: [
        StarterKit,
        Document,
        Paragraph,
        Text,
        TextAlign,
        Code,
        Link,
        Heading,
        Typography,
        Color,
        HorizontalRule,
        CodeBlockLowlight.configure({
            lowlight
        }),

    ],
})


onBeforeUnmount(() => {
    // console.log('close')
    editor.destroy()
})

defineExpose({
    test,
    getCurJson,
    getCurHtml,

})

// export default {
    // components: {
    //     EditorContent,
    //     BubbleMenu,
    //     FloatingMenu,
    //     TiptapTips
    // },
    // setup(props, context) {
    //     const test = () => {
    //         console.log('test')
    //     }
    //     context.expose({test})
    //     return {
    //         test
    //     }
    // },
    // data() {
    //     return {
    //         editor: null,
    //     }
    // },
    // methods: {
    //     test
    // },

    // mounted() {
    //     this.editor = new Editor({
            // content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
    //         extensions: [
    //             StarterKit,
    //             Document,
    //             Paragraph,
    //             Text,
    //             TextAlign,
    //             Code,
    //             Link,
    //             Heading,
    //             Typography,
    //             Color,
    //             HorizontalRule,
    //             CodeBlockLowlight.configure({
    //                 lowlight
    //             }),

    //         ],
    //     })
    // },

    // beforeUnmount() {
    //     this.editor.destroy()
    // },
// }
</script>


<style lang="scss">
#tiptap_nav {
    background-color: rgb(100, 92, 92, 0.4);
    border: solid;
    border-radius: 25px;
    display: flex;
    justify-content: center;
    position: -webkit-sticky;
    /* Safari */
    position: sticky;
    top: 0;
    z-index: 99;
}

pre {
    background: #0D0D0D;
    color: #FFF;
    font-family: 'JetBrainsMono', monospace;
    padding: 0.75rem 1rem;
    border-radius: 0.5rem;

    code {
        color: inherit;
        padding: 0;
        background: none;
        font-size: 0.8rem;
    }

    .hljs-comment,
    .hljs-quote {
        color: #616161;
    }

    .hljs-variable,
    .hljs-template-variable,
    .hljs-attribute,
    .hljs-tag,
    .hljs-name,
    .hljs-regexp,
    .hljs-link,
    .hljs-name,
    .hljs-selector-id,
    .hljs-selector-class {
        color: #F98181;
    }

    .hljs-number,
    .hljs-meta,
    .hljs-built_in,
    .hljs-builtin-name,
    .hljs-literal,
    .hljs-type,
    .hljs-params {
        color: #FBBC88;
    }

    .hljs-string,
    .hljs-symbol,
    .hljs-bullet {
        color: #B9F18D;
    }

    .hljs-title,
    .hljs-section {
        color: #FAF594;
    }

    .hljs-keyword,
    .hljs-selector-tag {
        color: #70CFF8;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: 700;
    }
}
</style>