import React, { useRef } from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
import { TINYMCE_API_KEY } from '../../../appSettings';
import {
  contentStyle,
  editorHeight,
  editorInitialValue,
  getActiveMenubarItems,
  getActiveOpenSourcePlugins,
  getActiveToolbarItems,
  resize,
} from './helper';

const menubar = getActiveMenubarItems();
const toolbar = getActiveToolbarItems();
const plugins = getActiveOpenSourcePlugins();
const apiKey = TINYMCE_API_KEY;

const TinymceComp: React.FC = () => {
  const { theme } = useThemeContext();
  const editorRef = useRef<TinyMCEEditor | null>(null);

  return (
    <>
      <Editor
        apiKey={apiKey}
        onInit={(_evt, editor) => (editorRef.current = editor)}
        initialValue={editorInitialValue}
        init={{
          skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
          content_css: theme === 'dark' ? 'dark' : 'default',
          content_style: contentStyle,
          height: editorHeight,
          resize: resize,
          menubar: menubar,
          plugins: plugins,
          toolbar: toolbar,
        }}
      />
    </>
  );
};

export default TinymceComp;
