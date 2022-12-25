// Infer the `RootState` and `AppDispatch` types from the store itself
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from '@infrastructure/storage/configurationStore';

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
