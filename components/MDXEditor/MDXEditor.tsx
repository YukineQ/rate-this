import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    MDXEditor as Editor,
    MDXEditorMethods,
    MDXEditorProps as BaseProps,
    UndoRedo,
    headingsPlugin,
    thematicBreakPlugin,
    toolbarPlugin,
    listsPlugin,
    ListsToggle,
    linkPlugin,
    CreateLink,
    tablePlugin,
    codeBlockPlugin,
    InsertCodeBlock,
    quotePlugin,
    linkDialogPlugin,
    codeMirrorPlugin,
} from "@mdxeditor/editor"
import { FC, useRef } from 'react'
import '@mdxeditor/editor/style.css'
import './index.css'
import { InputWrapper, InputWrapperPassThroughProps } from "../Elements/Input"

type MDXEditorProps = BaseProps & InputWrapperPassThroughProps

export const MDXEditor: FC<MDXEditorProps> = ({ label, description, error, ...props }) => {
    const ref = useRef<MDXEditorMethods>(null)

    const focusOnEditor = () => {
        if (ref.current) {
            ref.current.focus()
        }
    }

    return (
        <InputWrapper label={label} description={description} error={error} isNative={false}>
            <div className="shadow-sm rounded-md border border-border min-h-[200px] focus-within:ring-1 ring-slate-400" onClick={focusOnEditor}>
                <Editor
                    className="dark-theme dark-editor"
                    ref={ref}
                    plugins={
                        [
                            headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
                            thematicBreakPlugin(),
                            listsPlugin(),
                            linkPlugin(),
                            linkDialogPlugin(),
                            tablePlugin(),
                            codeBlockPlugin({ defaultCodeBlockLanguage: 'txt' }),
                            quotePlugin(),
                            codeMirrorPlugin({ codeBlockLanguages: { js: 'JavaScript', css: 'CSS', txt: 'text', tsx: 'TypeScript' } }),
                            toolbarPlugin({
                                toolbarContents: () => (
                                    <>
                                        <UndoRedo />
                                        <BoldItalicUnderlineToggles />
                                        <BlockTypeSelect />
                                        <ListsToggle />
                                        <CreateLink />
                                        <InsertCodeBlock />
                                    </>
                                )
                            }),
                        ]}
                    contentEditableClassName="markdown-body"
                    {...props}
                />
            </div>
        </InputWrapper>
    )
}