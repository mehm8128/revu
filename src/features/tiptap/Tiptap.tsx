'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import type {
	ControllerRenderProps,
	FieldPath,
	FieldValues
} from 'react-hook-form'

import styles from './Tiptap.module.scss'

export default function Tiptap<
	TFieldValues extends FieldValues = FieldValues,
	TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>({ field }: { field: ControllerRenderProps<TFieldValues, TName> }) {
	const editor = useEditor({
		extensions: [StarterKit],
		content: field.value,
		onBlur: () => {
			field.onBlur()
		},
		onUpdate: ({ editor }) => {
			field.onChange(editor.getHTML())
		}
	})

	if (!editor) {
		return null
	}

	return (
		<EditorContent editor={editor} ref={field.ref} className={styles.tiptap} />
	)
}
