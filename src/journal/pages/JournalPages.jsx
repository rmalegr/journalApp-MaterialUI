import { IconButton } from "@mui/material";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views/";
import { AddOutlined } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";

export const JournalPages = () => {
  const { isSaving, active } = useSelector((state) => state.journal);
  const dispatch = useDispatch();

  const onClikNewNote = () => {
    dispatch(startNewNote());
  };
  return (
    <>
      <JournalLayout>
        {!!active ? <NoteView /> : <NothingSelectedView />}
        <IconButton
          onClick={onClikNewNote}
          disabled={isSaving}
          size="large"
          sx={{
            color: "white",
            backgroundColor: "error.main",
            ":hover": {
              backgroundColor: "error.main",
              Opacity: 0.9,
            },

            position: "fixed",
            right: 50,
            bottom: 50,
          }}
        >
          <AddOutlined sx={{ fontSize: 30 }} />
        </IconButton>
      </JournalLayout>
    </>
  );
};
