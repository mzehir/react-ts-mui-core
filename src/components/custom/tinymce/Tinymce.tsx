import React, { useEffect, useRef, useState } from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import useLanguageContext from '../../../hooks/useLanguageContext';
import { Editor } from '@tinymce/tinymce-react';
import { Editor as TinyMCEEditor } from 'tinymce';
// import { tinymceApiKey } from '../../../appSettings';
import {
  contentStyle,
  editorHeight,
  editorInitialValue,
  getActiveMenubarItems,
  getActiveOpenSourcePlugins,
  getActiveToolbarItems,
  resize,
} from './helper';
import './tinymce.css';
import CircularProgressComp from '../../base/circularProgress/CircularProgress';
import ButtonComp from '../../base/button/Button';

const menubar = getActiveMenubarItems();
const toolbar = getActiveToolbarItems();
const plugins = getActiveOpenSourcePlugins();
// const apiKey = tinymceApiKey; //TODO: Commented out because it doesn't work on the Vercel platform. It can be retrieved from the .env file in the production environment.

const TinymceComp: React.FC = () => {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [editorKey, setEditorKey] = useState(0);

  useEffect(() => {
    setEditorKey((prevKey) => prevKey + 1);
  }, [theme, language]);

  return (
    <div style={{ position: 'relative' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            top: '50px',
            zIndex: '5',
          }}
        >
          <CircularProgressComp />
        </div>
      )}
      <Editor
        key={editorKey}
        apiKey="d5mo62uz4on15xuow4qssjl6wao2zsgxmhf79xycj4cp0ssw"
        onInit={(_evt, editor) => {
          editorRef.current = editor;
          setIsLoading(false);
        }}
        initialValue={editorInitialValue}
        init={{
          language: language,
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

      <br />

      <ButtonComp
        fullWidth={true}
        variant="contained"
        color="success"
        onClick={() => {
          if (editorRef.current) {
            console.log(editorRef.current.getContent());
          }
        }}
      >
        component.save
      </ButtonComp>
    </div>
  );
};

export default TinymceComp;
