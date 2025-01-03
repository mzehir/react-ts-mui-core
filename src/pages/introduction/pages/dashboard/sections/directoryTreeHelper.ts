import styled from '@emotion/styled';
import { ReactComponent as FolderSrc } from '../../../../../assets/other/icons/folder-src.svg';
import { ReactComponent as EditorConfig } from '../../../../../assets/other/icons/editorconfig.svg';
import { ReactComponent as Eslint } from '../../../../../assets/other/icons/eslint.svg';
import { ReactComponent as Git } from '../../../../../assets/other/icons/git.svg';
import { ReactComponent as Prettier } from '../../../../../assets/other/icons/prettier.svg';
import { ReactComponent as Html } from '../../../../../assets/other/icons/html.svg';
import { ReactComponent as Nodejs } from '../../../../../assets/other/icons/nodejs.svg';
import { ReactComponent as Readme } from '../../../../../assets/other/icons/readme.svg';
import { ReactComponent as Tsconfig } from '../../../../../assets/other/icons/tsconfig.svg';
import { ReactComponent as Vite } from '../../../../../assets/other/icons/vite.svg';
import { ReactComponent as FolderResource } from '../../../../../assets/other/icons/folder-resource.svg';
import { ReactComponent as FolderComponents } from '../../../../../assets/other/icons/folder-components.svg';
import { ReactComponent as FolderContext } from '../../../../../assets/other/icons/folder-context.svg';
import { ReactComponent as FolderGuard } from '../../../../../assets/other/icons/folder-guard.svg';
import { ReactComponent as FolderHook } from '../../../../../assets/other/icons/folder-hook.svg';
import { ReactComponent as FolderI18n } from '../../../../../assets/other/icons/folder-i18n.svg';
import { ReactComponent as FolderLayout } from '../../../../../assets/other/icons/folder-layout.svg';
import { ReactComponent as FolderViews } from '../../../../../assets/other/icons/folder-views.svg';
import { ReactComponent as FolderRoutes } from '../../../../../assets/other/icons/folder-routes.svg';
import { ReactComponent as FolderTheme } from '../../../../../assets/other/icons/folder-theme.svg';
import { ReactComponent as FolderUtils } from '../../../../../assets/other/icons/folder-utils.svg';
import { ReactComponent as ReactTs } from '../../../../../assets/other/icons/react_ts.svg';
import { ReactComponent as Typescript } from '../../../../../assets/other/icons/typescript.svg';
import { ReactComponent as TypescriptDef } from '../../../../../assets/other/icons/typescript-def.svg';
import { ReactComponent as FolderBase } from '../../../../../assets/other/icons/folder-base.svg';
import { ReactComponent as FolderCustom } from '../../../../../assets/other/icons/folder-custom.svg';
import { ReactComponent as Css } from '../../../../../assets/other/icons/css.svg';
import { ReactComponent as FolderHelper } from '../../../../../assets/other/icons/folder-helper.svg';
import { ReactComponent as FolderConfig } from '../../../../../assets/other/icons/folder-config.svg';
import { ReactComponent as FolderController } from '../../../../../assets/other/icons/folder-controller.svg';
import { ReactComponent as Json } from '../../../../../assets/other/icons/json.svg';
import { ReactComponent as FolderSecure } from '../../../../../assets/other/icons/folder-secure.svg';
import { ReactComponent as Routing } from '../../../../../assets/other/icons/routing.svg';
import { ReactComponent as FolderEnum } from '../../../../../assets/other/icons/folder-enum.svg';
import { ReactComponent as FolderRules } from '../../../../../assets/other/icons/folder-rules.svg';
import { ReactComponent as FolderLib } from '../../../../../assets/other/icons/folder-lib.svg';
import { ReactComponent as FolderApp } from '../../../../../assets/other/icons/folder-app.svg';
import { ReactComponent as FolderOther } from '../../../../../assets/other/icons/folder-other.svg';
import { ReactComponent as FolderDatabase } from '../../../../../assets/other/icons/folder-database.svg';
import { ReactComponent as FolderVscode } from '../../../../../assets/other/icons/folder-vscode.svg';
import { ReactComponent as Tune } from '../../../../../assets/other/icons/tune.svg';
import { ReactComponent as Vercel } from '../../../../../assets/other/icons/vercel.svg';

export interface TreeItemType {
  type: 'folder' | 'file' | 'text';
  openIcon: React.ElementType | null;
  closeIcon: React.ElementType | null;
  itemId: string;
  label: string;
  isTranslation?: boolean;
  children?: TreeItemType[] | null;
}

const iconPrepare = (IconComponent: React.ComponentType<React.SVGProps<SVGSVGElement>>) => {
  return styled(IconComponent)`
    width: 32px;
    height: 32px;
  `;
};

const FolderSrcIcon = iconPrepare(FolderSrc);
const EditorConfigIcon = iconPrepare(EditorConfig);
const EslintIcon = iconPrepare(Eslint);
const GitIcon = iconPrepare(Git);
const PrettierIcon = iconPrepare(Prettier);
const HtmlIcon = iconPrepare(Html);
const NodejsIcon = iconPrepare(Nodejs);
const ReadmeIcon = iconPrepare(Readme);
const TsconfigIcon = iconPrepare(Tsconfig);
const ViteIcon = iconPrepare(Vite);
const FolderResourceIcon = iconPrepare(FolderResource);
const FolderComponentsIcon = iconPrepare(FolderComponents);
const FolderContextIcon = iconPrepare(FolderContext);
const FolderGuardIcon = iconPrepare(FolderGuard);
const FolderHookIcon = iconPrepare(FolderHook);
const FolderI18nIcon = iconPrepare(FolderI18n);
const FolderLayoutIcon = iconPrepare(FolderLayout);
const FolderViewsIcon = iconPrepare(FolderViews);
const FolderRoutesIcon = iconPrepare(FolderRoutes);
const FolderThemeIcon = iconPrepare(FolderTheme);
const FolderUtilsIcon = iconPrepare(FolderUtils);
const ReactTsIcon = iconPrepare(ReactTs);
const TypescriptIcon = iconPrepare(Typescript);
const TypescriptDefIcon = iconPrepare(TypescriptDef);
const FolderBaseIcon = iconPrepare(FolderBase);
const FolderCustomIcon = iconPrepare(FolderCustom);
const CssIcon = iconPrepare(Css);
const FolderHelperIcon = iconPrepare(FolderHelper);
const FolderConfigIcon = iconPrepare(FolderConfig);
const FolderControllerIcon = iconPrepare(FolderController);
const JsonIcon = iconPrepare(Json);
const FolderSecureIcon = iconPrepare(FolderSecure);
const RoutingIcon = iconPrepare(Routing);
const FolderEnumIcon = iconPrepare(FolderEnum);
const FolderRulesIcon = iconPrepare(FolderRules);
const FolderLibIcon = iconPrepare(FolderLib);
const FolderAppIcon = iconPrepare(FolderApp);
const FolderOtherIcon = iconPrepare(FolderOther);
const FolderDatabaseIcon = iconPrepare(FolderDatabase);
const FolderVscodeIcon = iconPrepare(FolderVscode);
const TuneIcon = iconPrepare(Tune);
const VercelIcon = iconPrepare(Vercel);

export const directoryTreeItems: TreeItemType[] = [
  {
    type: 'folder',
    openIcon: FolderVscodeIcon,
    closeIcon: FolderVscodeIcon,
    itemId: '.vscode',
    label: '.vscode',
    children: [
      {
        type: 'file',
        openIcon: JsonIcon,
        closeIcon: JsonIcon,
        itemId: 'settingsjson',
        label: 'settings.json',
      },
    ],
  },
  {
    type: 'folder',
    openIcon: FolderSrcIcon,
    closeIcon: FolderSrcIcon,
    itemId: 'src',
    label: 'src',
    children: [
      {
        type: 'folder',
        openIcon: FolderResourceIcon,
        closeIcon: FolderResourceIcon,
        itemId: 'assets',
        label: 'assets',
        children: [
          {
            type: 'folder',
            openIcon: FolderAppIcon,
            closeIcon: FolderAppIcon,
            itemId: 'app',
            label: 'app',
            children: [
              {
                type: 'text',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'app###',
                label: 'introduction.folderFileDescription',
                isTranslation: true,
              },
            ],
          },
          {
            type: 'folder',
            openIcon: FolderOtherIcon,
            closeIcon: FolderOtherIcon,
            itemId: 'other',
            label: 'other',
            children: [
              {
                type: 'text',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'other###',
                label: 'introduction.folderFileDescription',
                isTranslation: true,
              },
            ],
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderComponentsIcon,
        closeIcon: FolderComponentsIcon,
        itemId: 'components',
        label: 'components',
        children: [
          {
            type: 'folder',
            openIcon: FolderBaseIcon,
            closeIcon: FolderBaseIcon,
            itemId: 'basecomponents',
            label: 'base',
            children: [
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'accordion',
                label: 'accordion',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Accordiontsx',
                    label: 'Accordion.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'accordionHelperts',
                    label: 'accordionHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'accordionDetails',
                label: 'accordionDetails',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'AccordionDetailstsx',
                    label: 'AccordionDetails.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'accordionDetailsHelperts',
                    label: 'accordionDetailsHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'accordionSummary',
                label: 'accordionSummary',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'AccordionSummarytsx',
                    label: 'AccordionSummary.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'accordionSummaryHelperts',
                    label: 'accordionSummaryHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'alert',
                label: 'alert',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Alerttsx',
                    label: 'Alert.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'alertHelperts',
                    label: 'alertHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'alertTitle',
                label: 'alertTitle',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'AlertTitletsx',
                    label: 'AlertTitle.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'alertTitleHelperts',
                    label: 'alertTitleHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'avatar',
                label: 'avatar',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Avatartsx',
                    label: 'Avatar.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'avatarHelperts',
                    label: 'avatarHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'box',
                label: 'box',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Boxtsx',
                    label: 'Box.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'boxHelperts',
                    label: 'boxHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'button',
                label: 'button',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Buttontsx',
                    label: 'Button.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'buttonHelperts',
                    label: 'buttonHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'card',
                label: 'card',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Cardtsx',
                    label: 'Card.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'cardHelperts',
                    label: 'cardHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'cardActions',
                label: 'cardActions',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CardActionstsx',
                    label: 'CardActions.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'cardActionsHelperts',
                    label: 'cardActionsHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'cardContent',
                label: 'cardContent',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CardContenttsx',
                    label: 'CardContent.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'cardContentHelperts',
                    label: 'cardContentHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'cardHeader',
                label: 'cardHeader',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CardHeadertsx',
                    label: 'CardHeader.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'cardHeaderHelperts',
                    label: 'cardHeaderHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'checkbox',
                label: 'checkbox',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Checkboxtsx',
                    label: 'Checkbox.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'checkboxHelperts',
                    label: 'checkboxHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'chip',
                label: 'chip',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Chiptsx',
                    label: 'Chip.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'chipHelperts',
                    label: 'chipHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'circularProgress',
                label: 'circularProgress',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CircularProgresstsx',
                    label: 'CircularProgress.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'circularProgressHelperts',
                    label: 'circularProgressHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'collapse',
                label: 'collapse',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Collapsetsx',
                    label: 'Collapse.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'collapseHelperts',
                    label: 'collapseHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'datePicker',
                label: 'datePicker',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DatePickertsx',
                    label: 'DatePicker.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'datePickerHelperts',
                    label: 'datePickerHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogbasecomponents',
                label: 'dialog',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Dialogtsx',
                    label: 'Dialog.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dialogHelperts',
                    label: 'dialogHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogActions',
                label: 'dialogActions',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DialogActionstsx',
                    label: 'DialogActions.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dialogActionsHelperts',
                    label: 'dialogActionsHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogContent',
                label: 'dialogContent',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DialogContenttsx',
                    label: 'DialogContent.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dialogContentHelperts',
                    label: 'dialogContentHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogContentText',
                label: 'dialogContentText',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DialogContentTexttsx',
                    label: 'DialogContentText.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dialogContentTextHelperts',
                    label: 'dialogContentTextHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogTitle',
                label: 'dialogTitle',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DialogTitletsx',
                    label: 'DialogTitle.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dialogTitleHelperts',
                    label: 'dialogTitleHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'divider',
                label: 'divider',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Dividertsx',
                    label: 'Divider.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'dividerHelperts',
                    label: 'dividerHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'drawer',
                label: 'drawer',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Drawertsx',
                    label: 'Drawer.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'drawerHelperts',
                    label: 'drawerHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'formControl',
                label: 'formControl',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'FormControltsx',
                    label: 'FormControl.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'formControlHelperts',
                    label: 'formControlHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'formControlLabel',
                label: 'formControlLabel',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'FormControlLabeltsx',
                    label: 'FormControlLabel.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'formControlLabelHelperts',
                    label: 'formControlLabelHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'formHelperText',
                label: 'formHelperText',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'FormHelperTexttsx',
                    label: 'FormHelperText.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'formHelperTextHelperts',
                    label: 'formHelperTextHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'formLabel',
                label: 'formLabel',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'FormLabeltsx',
                    label: 'FormLabel.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'formLabelHelperts',
                    label: 'formLabelHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'grid',
                label: 'grid',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Gridtsx',
                    label: 'Grid.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'gridHelperts',
                    label: 'gridHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'iconButton',
                label: 'iconButton',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'IconButtontsx',
                    label: 'IconButton.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'iconButtonHelperts',
                    label: 'iconButtonHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'inputBase',
                label: 'inputBase',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'InputBasetsx',
                    label: 'InputBase.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'inputBaseHelperts',
                    label: 'inputBaseHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'inputLabel',
                label: 'inputLabel',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'InputLabeltsx',
                    label: 'InputLabel.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'inputLabelHelperts',
                    label: 'inputLabelHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'link',
                label: 'link',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Linktsx',
                    label: 'Link.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'linkHelperts',
                    label: 'linkHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'list',
                label: 'list',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Listtsx',
                    label: 'List.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'listHelperts',
                    label: 'listHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'listItemButton',
                label: 'listItemButton',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'ListItemButtontsx',
                    label: 'ListItemButton.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'listItemButtonHelperts',
                    label: 'listItemButtonHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'listItemIcon',
                label: 'listItemIcon',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'ListItemIcontsx',
                    label: 'ListItemIcon.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'listItemIconHelperts',
                    label: 'listItemIconHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'listItemText',
                label: 'listItemText',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'ListItemTexttsx',
                    label: 'ListItemText.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'listItemTextHelperts',
                    label: 'listItemTextHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'localizationProvider',
                label: 'localizationProvider',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'LocalizationProvidertsx',
                    label: 'LocalizationProvider.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'menu',
                label: 'menu',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Menutsx',
                    label: 'Menu.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'menuHelperts',
                    label: 'menuHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'menuItem',
                label: 'menuItem',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'MenuItemtsx',
                    label: 'MenuItem.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'menuItemHelperts',
                    label: 'menuItemHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'paper',
                label: 'paper',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Papertsx',
                    label: 'Paper.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'paperHelperts',
                    label: 'paperHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'radio',
                label: 'radio',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Radiotsx',
                    label: 'Radio.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'radioHelperts',
                    label: 'radioHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'radioGroup',
                label: 'radioGroup',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'RadioGrouptsx',
                    label: 'RadioGroup.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'radioGroupHelperts',
                    label: 'radioGroupHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'select',
                label: 'select',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Selecttsx',
                    label: 'Select.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'selectHelperts',
                    label: 'selectHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'skeleton',
                label: 'skeleton',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Skeletontsx',
                    label: 'Skeleton.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'skeletonHelperts',
                    label: 'skeletonHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tablebasecomponents',
                label: 'table',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Tabletsx',
                    label: 'Table.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableHelperts',
                    label: 'tableHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tableBody',
                label: 'tableBody',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TableBodytsx',
                    label: 'TableBody.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableBodyHelperts',
                    label: 'tableBodyHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tableCell',
                label: 'tableCell',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TableCelltsx',
                    label: 'TableCell.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableCellHelperts',
                    label: 'tableCellHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tableContainer',
                label: 'tableContainer',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TableContainertsx',
                    label: 'TableContainer.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableContainerHelperts',
                    label: 'tableContainerHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tableHead',
                label: 'tableHead',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TableHeadtsx',
                    label: 'TableHead.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableHeadHelperts',
                    label: 'tableHeadHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tableRow',
                label: 'tableRow',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TableRowtsx',
                    label: 'TableRow.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tableRowHelperts',
                    label: 'tableRowHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'textField',
                label: 'textField',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'TextFieldtsx',
                    label: 'TextField.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'textFieldHelperts',
                    label: 'textFieldHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tooltip',
                label: 'tooltip',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Tooltiptsx',
                    label: 'Tooltip.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'tooltipHelperts',
                    label: 'tooltipHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'typography',
                label: 'typography',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Typographytsx',
                    label: 'Typography.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'typographyHelperts',
                    label: 'typographyHelper.ts',
                  },
                ],
              },
            ],
          },
          {
            type: 'folder',
            openIcon: FolderCustomIcon,
            closeIcon: FolderCustomIcon,
            itemId: 'customcomponents',
            label: 'custom',
            children: [
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'buttons',
                label: 'buttons',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CancelButtontsx',
                    label: 'CancelButton.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'DeleteButtontsx',
                    label: 'DeleteButton.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'SaveButtontsx',
                    label: 'SaveButton.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'dialogcustomcomponents',
                label: 'dialog',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'BootstrapDialogtsx',
                    label: 'BootstrapDialog.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'filter',
                label: 'filter',
                children: [
                  {
                    type: 'folder',
                    openIcon: FolderHelperIcon,
                    closeIcon: FolderHelperIcon,
                    itemId: 'helperfilter',
                    label: 'helper',
                    children: [
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentCheckboxHelper',
                        label: 'componentCheckboxHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentDatePickerHelper',
                        label: 'componentDatePickerHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentNumaricTextFieldHelper',
                        label: 'componentNumaricTextFieldHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentRadioHelper',
                        label: 'componentRadioHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentSelectHelper',
                        label: 'componentSelectHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'componentTextFieldHelper',
                        label: 'componentTextFieldHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'sectionDetailHelper',
                        label: 'sectionDetailHelper.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'sectionSummaryHelper',
                        label: 'sectionSummaryHelper.ts',
                      },
                    ],
                  },
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionsfilter',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'Detailtsx',
                        label: 'Detail.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'Summarytsx',
                        label: 'Summary.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CustomFiltertsx',
                    label: 'CustomFilter.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertsfilter',
                    label: 'helper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'logos',
                label: 'logos',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'LogoForAuthPagestsx',
                    label: 'LogoForAuthPages.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'LogoForSidebarSectiontsx',
                    label: 'LogoForSidebarSection.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'navbar',
                label: 'navbar',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'section',
                    label: 'section',
                    children: [
                      {
                        type: 'folder',
                        openIcon: FolderConfigIcon,
                        closeIcon: FolderConfigIcon,
                        itemId: 'settings',
                        label: 'settings',
                        children: [
                          {
                            type: 'folder',
                            openIcon: FolderI18nIcon,
                            closeIcon: FolderI18nIcon,
                            itemId: 'settingslanguage',
                            label: 'language',
                            children: [
                              {
                                type: 'file',
                                openIcon: ReactTsIcon,
                                closeIcon: ReactTsIcon,
                                itemId: 'LanguageItemtsx',
                                label: 'LanguageItem.tsx',
                              },
                              {
                                type: 'file',
                                openIcon: ReactTsIcon,
                                closeIcon: ReactTsIcon,
                                itemId: 'LanguageSettingstsx',
                                label: 'LanguageSettings.tsx',
                              },
                            ],
                          },
                          {
                            type: 'folder',
                            openIcon: FolderThemeIcon,
                            closeIcon: FolderThemeIcon,
                            itemId: 'settingstheme',
                            label: 'theme',
                            children: [
                              {
                                type: 'file',
                                openIcon: ReactTsIcon,
                                closeIcon: ReactTsIcon,
                                itemId: 'ThemeItemtsx',
                                label: 'ThemeItem.tsx',
                              },
                              {
                                type: 'file',
                                openIcon: ReactTsIcon,
                                closeIcon: ReactTsIcon,
                                itemId: 'ThemeSettingstsx',
                                label: 'ThemeSettings.tsx',
                              },
                            ],
                          },
                          {
                            type: 'file',
                            openIcon: ReactTsIcon,
                            closeIcon: ReactTsIcon,
                            itemId: 'settingsSettingstsx',
                            label: 'Settings.tsx',
                          },
                        ],
                      },
                      {
                        type: 'folder',
                        openIcon: null,
                        closeIcon: null,
                        itemId: 'userSettings',
                        label: 'userSettings',
                        children: [
                          {
                            type: 'file',
                            openIcon: ReactTsIcon,
                            closeIcon: ReactTsIcon,
                            itemId: 'UserSettingstsx',
                            label: 'UserSettings.tsx',
                          },
                        ],
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'RightSectiontsx',
                        label: 'RightSection.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Navbar',
                    label: 'Navbar.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'navbarHelper',
                    label: 'navbarHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'reactSlick',
                label: 'reactSlick',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Slidertsx',
                    label: 'Slider.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'sliderHelperts',
                    label: 'sliderHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'sidebar',
                label: 'sidebar',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionsidebar',
                    label: 'section',
                    children: [
                      {
                        type: 'folder',
                        openIcon: null,
                        closeIcon: null,
                        itemId: 'sidebarSections',
                        label: 'sidebarSections',
                        children: [
                          {
                            type: 'file',
                            openIcon: ReactTsIcon,
                            closeIcon: ReactTsIcon,
                            itemId: 'SidebarRoutestsx',
                            label: 'SidebarRoutes.tsx',
                          },
                          {
                            type: 'file',
                            openIcon: ReactTsIcon,
                            closeIcon: ReactTsIcon,
                            itemId: 'SidebarScrollbartsx',
                            label: 'SidebarScrollbar.tsx',
                          },
                        ],
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'SidebarBodytsx',
                        label: 'SidebarBody.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'SidebarFootertsx',
                        label: 'SidebarFooter.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'SidebarHeadertsx',
                        label: 'SidebarHeader.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Sidebartsx',
                    label: 'Sidebar.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'sidebarHelperts',
                    label: 'sidebarHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tablecustomcomponents',
                label: 'table',
                children: [
                  {
                    type: 'file',
                    openIcon: CssIcon,
                    closeIcon: CssIcon,
                    itemId: 'customTablecss',
                    label: 'customTable.css',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CustomTabletsx',
                    label: 'CustomTable.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'customTableHelperts',
                    label: 'customTableHelper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'textFields',
                label: 'textFields',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'NumaricTextFieldtsx',
                    label: 'NumaricTextField.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'PasswordTextFieldtsx',
                    label: 'PasswordTextField.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'PhoneTextFieldtsx',
                    label: 'PhoneTextField.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'SearchbarFieldtsx',
                    label: 'SearchbarField.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'tinymce',
                label: 'tinymce',
                children: [
                  {
                    type: 'folder',
                    openIcon: FolderHelperIcon,
                    closeIcon: FolderHelperIcon,
                    itemId: 'tinymcehelper',
                    label: 'helper',
                    children: [
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'menubarts',
                        label: 'menubar.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'pluginsts',
                        label: 'plugins.ts',
                      },
                      {
                        type: 'file',
                        openIcon: TypescriptIcon,
                        closeIcon: TypescriptIcon,
                        itemId: 'toolbarts',
                        label: 'toolbar.ts',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helperts',
                    label: 'helper.ts',
                  },
                  {
                    type: 'file',
                    openIcon: CssIcon,
                    closeIcon: CssIcon,
                    itemId: 'tinymcecss',
                    label: 'tinymce.css',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Tinymcetsx',
                    label: 'Tinymce.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'toastify',
                label: 'toastify',
                children: [
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'Toastifytsx',
                    label: 'Toastify.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'toastifyHelperts',
                    label: 'toastifyHelper.ts',
                  },
                ],
              },
            ],
          },
          {
            type: 'folder',
            openIcon: null,
            closeIcon: null,
            itemId: 'reactHookFormcomponents',
            label: 'reactHookForm',
            children: [
              {
                type: 'folder',
                openIcon: FolderControllerIcon,
                closeIcon: FolderControllerIcon,
                itemId: 'controller',
                label: 'controller',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'reactHookFormcomponentscontrollersections',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'RHFCheckboxComptsx',
                        label: 'RHFCheckboxComp.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'RHFRadioGroupComptsx',
                        label: 'RHFRadioGroupComp.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'RHFSelectComptsx',
                        label: 'RHFSelectComp.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'CustomControllertsxreactHookFormcomponents',
                    label: 'CustomController.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertsreactHookFormcomponents',
                    label: 'helper.ts',
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderContextIcon,
        closeIcon: FolderContextIcon,
        itemId: 'contexts',
        label: 'contexts',
        children: [
          {
            type: 'file',
            openIcon: ReactTsIcon,
            closeIcon: ReactTsIcon,
            itemId: 'LanguageContexttsxcontexts',
            label: 'LanguageContext.tsx',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'languageContextHelpertscontexts',
            label: 'languageContextHelper.ts',
          },
          {
            type: 'file',
            openIcon: ReactTsIcon,
            closeIcon: ReactTsIcon,
            itemId: 'ThemeContexttsxcontexts',
            label: 'ThemeContext.tsx',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'ThemeContextHelpertscontexts',
            label: 'ThemeContextHelper.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderDatabaseIcon,
        closeIcon: FolderDatabaseIcon,
        itemId: 'db',
        label: 'db',
        children: [
          {
            type: 'text',
            openIcon: null,
            closeIcon: null,
            itemId: 'usersdb',
            label: 'introduction.folderFileAppDescription',
            isTranslation: true,
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderGuardIcon,
        closeIcon: FolderGuardIcon,
        itemId: 'guards',
        label: 'guards',
        children: [
          {
            type: 'file',
            openIcon: ReactTsIcon,
            closeIcon: ReactTsIcon,
            itemId: 'Guardtsxguards',
            label: 'Guard.tsx',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderHookIcon,
        closeIcon: FolderHookIcon,
        itemId: 'hooks',
        label: 'hooks',
        children: [
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'useLanguageContexttshooks',
            label: 'useLanguageContext.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'useThemeContexttshooks',
            label: 'useThemeContext.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderI18nIcon,
        closeIcon: FolderI18nIcon,
        itemId: 'i18n',
        label: 'i18n',
        children: [
          {
            type: 'folder',
            openIcon: FolderI18nIcon,
            closeIcon: FolderI18nIcon,
            itemId: 'localesi18n',
            label: 'locales',
            children: [
              {
                type: 'file',
                openIcon: JsonIcon,
                closeIcon: JsonIcon,
                itemId: 'de',
                label: 'de.json',
              },
              {
                type: 'file',
                openIcon: JsonIcon,
                closeIcon: JsonIcon,
                itemId: 'en',
                label: 'en.json',
              },
              {
                type: 'file',
                openIcon: JsonIcon,
                closeIcon: JsonIcon,
                itemId: 'tr',
                label: 'tr.json',
              },
            ],
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'i18ntsi18n',
            label: 'i18n.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderLayoutIcon,
        closeIcon: FolderLayoutIcon,
        itemId: 'layouts',
        label: 'layouts',
        children: [
          {
            type: 'file',
            openIcon: ReactTsIcon,
            closeIcon: ReactTsIcon,
            itemId: 'AuthLayouttsxlayouts',
            label: 'AuthLayout.tsx',
          },
          {
            type: 'file',
            openIcon: ReactTsIcon,
            closeIcon: ReactTsIcon,
            itemId: 'DefaultLayouttsxlayouts',
            label: 'DefaultLayout.tsx',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderViewsIcon,
        closeIcon: FolderViewsIcon,
        itemId: 'pages',
        label: 'pages',
        children: [
          {
            type: 'folder',
            openIcon: FolderSecureIcon,
            closeIcon: FolderSecureIcon,
            itemId: 'auth',
            label: 'auth',
            children: [
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'forgotPasswordauth',
                label: 'forgotPassword',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionsforgotPasswordauth',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'BodytsxforgotPassword',
                        label: 'Body.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'HeadertsxforgotPassword',
                        label: 'Header.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'LogotsxforgotPassword',
                        label: 'Logo.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'ForgotPasswordtsxforgotPasswordauth',
                    label: 'ForgotPassword.tsx',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertsforgotPasswordauth',
                    label: 'helper.ts',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'resetPasswordauth',
                label: 'resetPassword',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionsresetPasswordauth',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'BodytsxsectionsresetPasswordauth',
                        label: 'Body.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'HeadertsxsectionsresetPasswordauth',
                        label: 'Header.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'LogotsxsectionsresetPasswordauth',
                        label: 'Logo.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertsresetPasswordauth',
                    label: 'helper.ts',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'ResetPasswordresetPasswordauth',
                    label: 'ResetPassword.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'signInauth',
                label: 'signIn',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionssignInauth',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'BodytsxsectionssignInauth',
                        label: 'Body.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'FootertsxsectionssignInauth',
                        label: 'Footer.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'HeadertsxsectionssignInauth',
                        label: 'Header.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'LogotsxsectionssignInauth',
                        label: 'Logo.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertssignInauth',
                    label: 'helper.ts',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'SignIntsxsignInauth',
                    label: 'SignIn.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'signUpauth',
                label: 'signUp',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionssignUpauth',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'BodytsxsectionssignUpauth',
                        label: 'Body.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'FootertsxsectionssignUpauth',
                        label: 'Footer.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'HeadertsxsectionssignUpauth',
                        label: 'Header.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'LogotsxsectionssignUpauth',
                        label: 'Logo.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertssignUpauth',
                    label: 'helper.ts',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'SignUptsxsignUpauth',
                    label: 'SignUp.tsx',
                  },
                ],
              },
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'verifySignInauth',
                label: 'verifySignIn',
                children: [
                  {
                    type: 'folder',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'sectionsverifySignInauth',
                    label: 'sections',
                    children: [
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'BodytsxsectionsverifySignInauth',
                        label: 'Body.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'FootertsxsectionsverifySignInauth',
                        label: 'Footer.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'HeadertsxsectionsverifySignInauth',
                        label: 'Header.tsx',
                      },
                      {
                        type: 'file',
                        openIcon: ReactTsIcon,
                        closeIcon: ReactTsIcon,
                        itemId: 'LogotsxsectionsverifySignInauth',
                        label: 'Logo.tsx',
                      },
                    ],
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'helpertsverifySignInauth',
                    label: 'helper.ts',
                  },
                  {
                    type: 'file',
                    openIcon: ReactTsIcon,
                    closeIcon: ReactTsIcon,
                    itemId: 'VerifySignIntsxverifySignInauth',
                    label: 'VerifySignIn.tsx',
                  },
                ],
              },
              {
                type: 'file',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'ErrorPage',
                label: 'ErrorPage.tsx',
              },
              {
                type: 'file',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'ForbiddenPage',
                label: 'ForbiddenPage.tsx',
              },
              {
                type: 'file',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'NotFoundPage',
                label: 'NotFoundPage.tsx',
              },
              {
                type: 'file',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'ServerErrorPage',
                label: 'ServerErrorPage.tsx',
              },
            ],
          },
          {
            type: 'folder',
            openIcon: null,
            closeIcon: null,
            itemId: 'introduction',
            label: 'introduction',
            children: [
              {
                type: 'text',
                openIcon: ReactTsIcon,
                closeIcon: ReactTsIcon,
                itemId: 'introduction###',
                label: 'introduction.folderFileAppDescription',
                isTranslation: true,
              },
            ],
          },
        ],
      },
      {
        type: 'folder',
        openIcon: null,
        closeIcon: null,
        itemId: 'redux',
        label: 'redux',
        children: [
          {
            type: 'folder',
            openIcon: null,
            closeIcon: null,
            itemId: 'slicesredux',
            label: 'slices',
            children: [
              {
                type: 'folder',
                openIcon: FolderControllerIcon,
                closeIcon: FolderControllerIcon,
                itemId: 'servicesslicesredux',
                label: 'services',
                children: [
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'defaultApiDtotsservicesslicesredux',
                    label: 'defaultApiDto.ts',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'defaultApiSlicestsservicesslicesredux',
                    label: 'defaultApiSlices.ts',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'jsonPlaceholderDtotsservicesslicesredux',
                    label: 'jsonPlaceholderDto.ts',
                  },
                  {
                    type: 'file',
                    openIcon: TypescriptIcon,
                    closeIcon: TypescriptIcon,
                    itemId: 'jsonPlaceholderSlicestsservicesslicesredux',
                    label: 'jsonPlaceholderSlices.ts',
                  },
                ],
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'authSliceslicesredux',
                label: 'authSlice.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'counterSliceslicesredux',
                label: 'counterSlice.ts',
              },
            ],
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'store',
            label: 'store.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderRoutesIcon,
        closeIcon: FolderRoutesIcon,
        itemId: 'router',
        label: 'router',
        children: [
          {
            type: 'folder',
            openIcon: FolderHelperIcon,
            closeIcon: FolderHelperIcon,
            itemId: 'helperrouter',
            label: 'helper',
            children: [
              {
                type: 'folder',
                openIcon: null,
                closeIcon: null,
                itemId: 'introductionRouterhelperrouter',
                label: 'introductionRouter',
                children: [
                  {
                    type: 'text',
                    openIcon: null,
                    closeIcon: null,
                    itemId: 'usersdb22',
                    label: 'introduction.folderFileAppDescription',
                    isTranslation: true,
                  },
                ],
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'accessErrorsRoutertshelperrouter',
                label: 'accessErrorsRouter.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'authRoutertshelperrouter',
                label: 'authRouter.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'otherRoutertshelperrouter',
                label: 'otherRouter.ts',
              },
            ],
          },
          {
            type: 'file',
            openIcon: RoutingIcon,
            closeIcon: RoutingIcon,
            itemId: 'Routertsxrouter',
            label: 'Router.tsx',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'routerConstant',
            label: 'routerConstant.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderThemeIcon,
        closeIcon: FolderThemeIcon,
        itemId: 'theme',
        label: 'theme',
        children: [
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'breakpointststheme',
            label: 'breakpoints.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'componentststheme',
            label: 'components.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'indextstheme',
            label: 'index.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'shadowststheme',
            label: 'shadows.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'typographytstheme',
            label: 'typography.ts',
          },
          {
            type: 'file',
            openIcon: TypescriptIcon,
            closeIcon: TypescriptIcon,
            itemId: 'variantststheme',
            label: 'variants.ts',
          },
        ],
      },
      {
        type: 'folder',
        openIcon: FolderUtilsIcon,
        closeIcon: FolderUtilsIcon,
        itemId: 'utils',
        label: 'utils',
        children: [
          {
            type: 'folder',
            openIcon: FolderEnumIcon,
            closeIcon: FolderEnumIcon,
            itemId: 'enums',
            label: 'enums',
            children: [
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'languagestsenums',
                label: 'languages.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'localStorageKeystsenums',
                label: 'localStorageKeys.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'themetsenums',
                label: 'theme.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'userTypestsenums',
                label: 'userTypes.ts',
              },
            ],
          },
          {
            type: 'folder',
            openIcon: FolderI18nIcon,
            closeIcon: FolderI18nIcon,
            itemId: 'locale',
            label: 'locale',
            children: [
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'dateFormatstslocale',
                label: 'dateFormats.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'localetslocale',
                label: 'locale.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'numberFormatstslocale',
                label: 'numberFormats.ts',
              },
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'phoneFormatstslocale',
                label: 'phoneFormats.ts',
              },
            ],
          },
          {
            type: 'folder',
            openIcon: null,
            closeIcon: null,
            itemId: 'methods',
            label: 'methods',
            children: [
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'localStoragetsmethods',
                label: 'localStorage.ts',
              },
            ],
          },
          {
            type: 'folder',
            openIcon: FolderRulesIcon,
            closeIcon: FolderRulesIcon,
            itemId: 'validations',
            label: 'validations',
            children: [
              {
                type: 'file',
                openIcon: TypescriptIcon,
                closeIcon: TypescriptIcon,
                itemId: 'generalValidationstsvalidations',
                label: 'generalValidations.ts',
              },
            ],
          },
          {
            type: 'folder',
            openIcon: FolderLibIcon,
            closeIcon: FolderLibIcon,
            itemId: 'vendor',
            label: 'vendor',
            children: [
              {
                type: 'file',
                openIcon: CssIcon,
                closeIcon: CssIcon,
                itemId: 'perfectscrollbarcssvendor',
                label: 'perfect-scrollbar.css',
              },
            ],
          },
        ],
      },
      {
        type: 'file',
        openIcon: ReactTsIcon,
        closeIcon: ReactTsIcon,
        itemId: 'Apptsx',
        label: 'App.tsx',
      },
      {
        type: 'file',
        openIcon: TypescriptIcon,
        closeIcon: TypescriptIcon,
        itemId: 'appSettingsts',
        label: 'appSettings.ts',
      },
      {
        type: 'file',
        openIcon: TypescriptDefIcon,
        closeIcon: TypescriptDefIcon,
        itemId: 'emotiondts',
        label: 'emotion.d.ts',
      },
      {
        type: 'file',
        openIcon: ReactTsIcon,
        closeIcon: ReactTsIcon,
        itemId: 'GlobalStyletsx',
        label: 'GlobalStyle.tsx',
      },
      {
        type: 'file',
        openIcon: ReactTsIcon,
        closeIcon: ReactTsIcon,
        itemId: 'maintsx',
        label: 'main.tsx',
      },
      {
        type: 'file',
        openIcon: TypescriptDefIcon,
        closeIcon: TypescriptDefIcon,
        itemId: 'reactslickdts',
        label: 'react-slick.d.ts',
      },
      {
        type: 'file',
        openIcon: TypescriptDefIcon,
        closeIcon: TypescriptDefIcon,
        itemId: 'svgdts',
        label: 'svg.d.ts',
      },
      {
        type: 'file',
        openIcon: TypescriptDefIcon,
        closeIcon: TypescriptDefIcon,
        itemId: 'themedts',
        label: 'theme.d.ts',
      },
      {
        type: 'file',
        openIcon: TypescriptDefIcon,
        closeIcon: TypescriptDefIcon,
        itemId: 'viteenvdts',
        label: 'vite-env.d.ts',
      },
    ],
  },
  {
    type: 'file',
    openIcon: EditorConfigIcon,
    closeIcon: EditorConfigIcon,
    itemId: 'editorconfig',
    label: '.editorconfig',
  },
  {
    type: 'file',
    openIcon: TuneIcon,
    closeIcon: TuneIcon,
    itemId: 'env',
    label: '.env',
  },
  {
    type: 'file',
    openIcon: EslintIcon,
    closeIcon: EslintIcon,
    itemId: 'eslintrc',
    label: '.eslintrc.cjs',
  },
  {
    type: 'file',
    openIcon: GitIcon,
    closeIcon: GitIcon,
    itemId: 'gitignore',
    label: '.gitignore',
  },
  {
    type: 'file',
    openIcon: PrettierIcon,
    closeIcon: PrettierIcon,
    itemId: 'prettierrc',
    label: '.prettierrc',
  },
  {
    type: 'file',
    openIcon: HtmlIcon,
    closeIcon: HtmlIcon,
    itemId: 'indexhtml',
    label: 'index.html',
  },
  {
    type: 'file',
    openIcon: NodejsIcon,
    closeIcon: NodejsIcon,
    itemId: 'packagelock',
    label: 'package-lock.json',
  },
  {
    type: 'file',
    openIcon: NodejsIcon,
    closeIcon: NodejsIcon,
    itemId: 'package',
    label: 'package.json',
  },
  {
    type: 'file',
    openIcon: ReadmeIcon,
    closeIcon: ReadmeIcon,
    itemId: 'README',
    label: 'README.md',
  },
  {
    type: 'file',
    openIcon: TsconfigIcon,
    closeIcon: TsconfigIcon,
    itemId: 'tsconfig',
    label: 'tsconfig.json',
  },
  {
    type: 'file',
    openIcon: TsconfigIcon,
    closeIcon: TsconfigIcon,
    itemId: 'tsconfignode',
    label: 'tsconfig.node.json',
  },
  {
    type: 'file',
    openIcon: VercelIcon,
    closeIcon: VercelIcon,
    itemId: 'vercel',
    label: 'vercel.json',
  },
  {
    type: 'file',
    openIcon: ViteIcon,
    closeIcon: ViteIcon,
    itemId: 'viteconfig',
    label: 'vite.config.ts',
  },
];
