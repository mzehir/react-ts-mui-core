import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import CustomController from '../../../components/other/reactHookForm/controller/CustomController';
import {
  useCreatePostMutation,
  useDeletePostMutation,
  useGetPostByIdQuery,
  useGetPostsByUserQuery,
  useGetPostsQuery,
  usePatchPostMutation,
  useUpdatePostMutation,
} from '../../../redux/slices/services/jsonPlaceholderSlices';
import { getPostsResponseDto } from '../../../redux/slices/services/jsonPlaceholderDto';
import IconButtonComp from '../../../components/base/iconButton/IconButton';
import DividerComp from '../../../components/base/divider/Divider';
import TypographyComp from '../../../components/base/typography/Typography';
import CardComp from '../../../components/base/card/Card';
import CardContentComp from '../../../components/base/cardContent/CardContent';
import BoxComp from '../../../components/base/box/Box';
import GridComp from '../../../components/base/grid/Grid';
import ButtonComp from '../../../components/base/button/Button';
import {
  BootstrapDialog,
  BootstrapDialogActions,
  BootstrapDialogContent,
  BootstrapDialogTitle,
} from '../../../components/custom/dialogs/BootstrapDialog';
import AlertComp from '../../../components/base/alert/Alert';
import SaveButton from '../../../components/custom/buttons/SaveButton';
import CancelButton from '../../../components/custom/buttons/CancelButton';
import { styled } from '@mui/material/styles';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const RTKApiExamp: React.FC = () => {
  const [createPostDialogOpen, setCreatePostDialogOpen] = React.useState(false);
  const [getPostsDialogOpen, setGetPostsDialogOpen] = React.useState(false);
  const [getPostByIdDialogOpen, setGetPostByIdDialogOpen] = React.useState(false);
  const [getPostsByUserDialogOpen, setGetPostsByUserDialogOpen] = React.useState(false);
  const [updatePostDialogOpen, setUpdatePostDialogOpen] = React.useState(false);
  const [patchPostDialogOpen, setPatchPostDialogOpen] = React.useState(false);
  const [deletePostDialogOpen, setDeletePostDialogOpen] = React.useState(false);

  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.rtkApiUsageExample
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.sendRequestWithRTK
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={3}>
            <GridComp item xs={12} display={'flex'} justifyContent={'center'} gap={'15px'} flexWrap={'wrap'}>
              <ButtonComp
                onClick={() => {
                  setCreatePostDialogOpen(true);
                }}
                variant="contained"
                color="success"
              >
                introduction.createPostDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setGetPostsDialogOpen(true);
                }}
                variant="contained"
                color="primary"
              >
                introduction.getPostsDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setGetPostByIdDialogOpen(true);
                }}
                variant="contained"
                color="primary"
              >
                introduction.getPostByIdDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setGetPostsByUserDialogOpen(true);
                }}
                variant="contained"
                color="primary"
              >
                introduction.getPostsByUserDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setUpdatePostDialogOpen(true);
                }}
                variant="contained"
                color="success"
              >
                introduction.updatePostDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setPatchPostDialogOpen(true);
                }}
                variant="contained"
                color="success"
              >
                introduction.patchPostDialog
              </ButtonComp>
              <ButtonComp
                onClick={() => {
                  setDeletePostDialogOpen(true);
                }}
                variant="contained"
                color="error"
              >
                introduction.deletePostDialog
              </ButtonComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      <br />
      <br />

      {createPostDialogOpen && <CreatePostDialog open={createPostDialogOpen} setOpen={setCreatePostDialogOpen} />}

      {getPostsDialogOpen && <GetPostsDialog open={getPostsDialogOpen} setOpen={setGetPostsDialogOpen} />}

      {getPostByIdDialogOpen && <GetPostByIdDialog open={getPostByIdDialogOpen} setOpen={setGetPostByIdDialogOpen} />}

      {getPostsByUserDialogOpen && (
        <GetPostsByUserDialog open={getPostsByUserDialogOpen} setOpen={setGetPostsByUserDialogOpen} />
      )}

      {updatePostDialogOpen && <UpdatePostDialog open={updatePostDialogOpen} setOpen={setUpdatePostDialogOpen} />}

      {patchPostDialogOpen && <PatchPostDialog open={patchPostDialogOpen} setOpen={setPatchPostDialogOpen} />}

      {deletePostDialogOpen && <DeletePostDialog open={deletePostDialogOpen} setOpen={setDeletePostDialogOpen} />}
    </>
  );
};

export default RTKApiExamp;

interface DialogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePostDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const [createPost] = useCreatePostMutation();
  interface FormValues {
    title: string;
    body: string;
  }

  const defaultValues: FormValues = {
    title: 'Lorem Ipsum',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  };

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    console.log(data);
    await createPost({
      title: data.title,
      body: data.body,
      userId: 1,
    }).unwrap();
  };
  return (
    <BootstrapDialog fullWidth maxWidth="lg" open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.createPostDialog</BootstrapDialogTitle>
        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
            <CustomController<FormValues>
              name="title"
              control={control}
              componentFields={{
                componentType: 'textField',
              }}
            />

            <CustomController<FormValues>
              name="body"
              control={control}
              componentFields={{
                componentType: 'textField',
              }}
            />
          </BoxComp>
        </BootstrapDialogContent>
        <BootstrapDialogActions>
          <SaveButton />
          <CancelButton onClick={() => setOpen(false)} />
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};

const GetPostsDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const { data, error, isLoading } = useGetPostsQuery();
  return (
    <BootstrapDialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.getPostsDialog</BootstrapDialogTitle>
      <BootstrapDialogContent>
        {isLoading ? (
          <AlertComp severity="info">introduction.fetchingData</AlertComp>
        ) : error ? (
          <AlertComp severity="info">introduction.error</AlertComp>
        ) : (
          <GridComp container spacing={2}>
            {data?.map((post: getPostsResponseDto, index: number) => (
              <React.Fragment key={index.toString()}>
                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.rowNo</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {index + 1}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.title</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.title}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.body</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.body}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.id</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.id}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.userId</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.userId}
                </GridComp>

                <GridComp item xs={12} display={data.length == index + 1 ? 'none' : 'grid'}>
                  <DividerComp />
                </GridComp>
              </React.Fragment>
            ))}
          </GridComp>
        )}
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
          Cancel
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};

const GetPostByIdDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const { data, error, isLoading } = useGetPostByIdQuery(1);
  return (
    <BootstrapDialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.getPostByIdDialog</BootstrapDialogTitle>
      <BootstrapDialogContent>
        {isLoading ? (
          <AlertComp severity="info">introduction.fetchingData</AlertComp>
        ) : error ? (
          <AlertComp severity="info">introduction.error</AlertComp>
        ) : (
          <GridComp container spacing={2}>
            <GridComp item xs={2}>
              <TypographyComp variant="button">introduction.title</TypographyComp>
            </GridComp>
            <GridComp item xs={10}>
              {data?.title}
            </GridComp>

            <GridComp item xs={2}>
              <TypographyComp variant="button">introduction.body</TypographyComp>
            </GridComp>
            <GridComp item xs={10}>
              {data?.body}
            </GridComp>

            <GridComp item xs={2}>
              <TypographyComp variant="button">introduction.id</TypographyComp>
            </GridComp>
            <GridComp item xs={10}>
              {data?.id}
            </GridComp>

            <GridComp item xs={2}>
              <TypographyComp variant="button">introduction.userId</TypographyComp>
            </GridComp>
            <GridComp item xs={10}>
              {data?.userId}
            </GridComp>
          </GridComp>
        )}
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
          introduction.cancel
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};

const GetPostsByUserDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const { data, error, isLoading } = useGetPostsByUserQuery(1);
  return (
    <BootstrapDialog maxWidth="md" open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.getPostsByUserDialog</BootstrapDialogTitle>
      <BootstrapDialogContent>
        {isLoading ? (
          <AlertComp severity="info">introduction.fetchingData</AlertComp>
        ) : error ? (
          <AlertComp severity="info">introduction.error</AlertComp>
        ) : (
          <GridComp container spacing={2}>
            {data?.map((post: getPostsResponseDto, index: number) => (
              <React.Fragment key={index.toString()}>
                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.rowNo</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {index + 1}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.title</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.title}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.body</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.body}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.id</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.id}
                </GridComp>

                <GridComp item xs={2}>
                  <TypographyComp variant="button">introduction.userId</TypographyComp>
                </GridComp>
                <GridComp item xs={10}>
                  {post.userId}
                </GridComp>

                <GridComp item xs={12} display={data.length == index + 1 ? 'none' : 'grid'}>
                  <DividerComp />
                </GridComp>
              </React.Fragment>
            ))}
          </GridComp>
        )}
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
          introduction.cancel
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};

const UpdatePostDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const [updatePost] = useUpdatePostMutation();
  interface FormValues {
    title: string;
    body: string;
  }

  const defaultValues: FormValues = {
    title: 'Lorem Ipsum',
    body: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  };

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    await updatePost({
      id: 3,
      title: data.title,
      body: data.body,
      userId: 1,
    }).unwrap();
  };
  return (
    <BootstrapDialog fullWidth maxWidth="lg" open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.updatePostDialog</BootstrapDialogTitle>
        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
            <CustomController<FormValues>
              name="title"
              control={control}
              componentFields={{
                componentType: 'textField',
              }}
            />

            <CustomController<FormValues>
              name="body"
              control={control}
              componentFields={{
                componentType: 'textField',
              }}
            />
          </BoxComp>
        </BootstrapDialogContent>
        <BootstrapDialogActions>
          <SaveButton />
          <CancelButton onClick={() => setOpen(false)} />
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};

const PatchPostDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const [patchPost] = usePatchPostMutation();
  interface FormValues {
    title: string;
  }

  const defaultValues: FormValues = {
    title: 'Lorem Ipsum',
  };

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues,
  });

  const formHandleSubmit: SubmitHandler<FormValues> = async (data) => {
    await patchPost({
      id: 3,
      title: data.title,
    }).unwrap();
  };
  return (
    <BootstrapDialog fullWidth maxWidth="lg" open={open} onClose={() => setOpen(false)}>
      <form onSubmit={handleSubmit(formHandleSubmit)}>
        <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.patchPostDialog</BootstrapDialogTitle>
        <BootstrapDialogContent>
          <BoxComp display={'flex'} flexDirection={'column'} gap={'15px'}>
            <CustomController<FormValues>
              name="title"
              control={control}
              componentFields={{
                componentType: 'textField',
              }}
            />
          </BoxComp>
        </BootstrapDialogContent>
        <BootstrapDialogActions>
          <SaveButton />
          <CancelButton onClick={() => setOpen(false)} />
        </BootstrapDialogActions>
      </form>
    </BootstrapDialog>
  );
};

const DeletePostDialog: React.FC<DialogProps> = ({ open, setOpen }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();

  const handleDeletePost = async () => {
    deletePost(1);
  };
  return (
    <BootstrapDialog maxWidth="md" fullWidth open={open} onClose={() => setOpen(false)}>
      <BootstrapDialogTitle onClose={() => setOpen(false)}>introduction.deletePostDialog</BootstrapDialogTitle>
      <BootstrapDialogContent>
        <AlertComp severity="info">
          {isLoading ? 'introduction.deletingAPost' : 'introduction.startThePostDeletionProcess'}
        </AlertComp>
      </BootstrapDialogContent>
      <BootstrapDialogActions>
        <ButtonComp variant="contained" color="error" onClick={handleDeletePost}>
          introduction.delete
        </ButtonComp>
        <ButtonComp variant="contained" color="warning" onClick={() => setOpen(false)}>
          introduction.cancel
        </ButtonComp>
      </BootstrapDialogActions>
    </BootstrapDialog>
  );
};
