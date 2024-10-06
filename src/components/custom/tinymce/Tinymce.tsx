import React, { useEffect, useRef, useState } from 'react';
import useThemeContext from '../../../hooks/useThemeContext';
import useLanguageContext from '../../../hooks/useLanguageContext';
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
import './tinymce.css';
import ButtonComp from '../../base/button/Button';

const menubar = getActiveMenubarItems();
const toolbar = getActiveToolbarItems();
const plugins = getActiveOpenSourcePlugins();
const apiKey = TINYMCE_API_KEY;

const TinymceComp: React.FC = () => {
  const { theme } = useThemeContext();
  const { language } = useLanguageContext();
  const editorRef = useRef<TinyMCEEditor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme, language]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 100);
  }, [isLoading]);

  return (
    <div>
      {!isLoading && (
        <Editor
          apiKey={apiKey}
          onInit={(_evt, editor) => {
            editorRef.current = editor;
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
      )}

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
