import { useContext } from 'react';
import { LanguageContext } from '../contexts/LanguageContext';

const useLanguageContext = () => useContext(LanguageContext);

export default useLanguageContext;
