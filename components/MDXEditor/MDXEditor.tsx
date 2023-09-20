import {
    BlockTypeSelect,
    BoldItalicUnderlineToggles,
    MDXEditor as Editor,
    MDXEditorMethods,
    MDXEditorProps,
    UndoRedo,
    frontmatterPlugin,
    headingsPlugin,
    thematicBreakPlugin,
    toolbarPlugin,
} from "@mdxeditor/editor"
import { FC } from 'react'
import '@mdxeditor/editor/style.css'

export const MDXEditor: FC<MDXEditorProps> = ({ ...props }) => {
    return <Editor
        plugins={
            [
                headingsPlugin({ allowedHeadingLevels: [1, 2, 3] }),
                frontmatterPlugin(),
                thematicBreakPlugin(),
                toolbarPlugin({
                    toolbarContents: () => (<> <UndoRedo /><BoldItalicUnderlineToggles /><BlockTypeSelect /></>)
                })
            ]}
        {...props}
    />
}