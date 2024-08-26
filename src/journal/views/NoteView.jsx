import { useDispatch, useSelector } from "react-redux";
import {
  DeleteOutline,
  SaveOutlined,
  TimeToLeaveOutlined,
  UploadOutlined,
} from "@mui/icons-material";
import {
  Button,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { ImageGallery } from "../components";
import { useForm } from "../../hooks/useForm";
import { useEffect, useMemo, useRef } from "react";
import {
  setActiveNote,
  startDeletingNote,
  startSaveNote,
  startUploadingFiles,
} from "../../store/journal";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state) => state.journal);

  const { body, title, date, onInputChange, formState } = useForm(note);

  const onInputChangeFile = ({ target }) => {
    if (target.files === 0) return;
    dispatch(startUploadingFiles(target.files));
  };

  const dateString = useMemo(() => {
    const newDate = new Date(date);
    return newDate.toUTCString();
  }, [date]);

  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  const fileInputRef = useRef(null);

  const saveNote = () => {
    dispatch(startSaveNote());
  };

  const onDelete = () => {
    dispatch(startDeletingNote());
    Swal.fire("Nota eliminada", "", "success");
  };
  return (
    <Grid
      container
      className="animate__animated animate__fadeIn animate__faster"
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Typography fontSize={39} fontWeight="light">
        {" "}
        {dateString}
      </Typography>

      <Grid item>
        {/* <input type="file">File</input> */}
        <input
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onInputChangeFile}
          style={{ display: "none" }}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => fileInputRef.current.click()}
          placeholder="Subir archivo"
          sx={{ padding: 2 }}
        >
          <Tooltip title="Subir archivo">
            <UploadOutlined />
          </Tooltip>
        </IconButton>
        <Button
          color="primary"
          sx={{ padding: 2 }}
          onClick={saveNote}
          disabled={isSaving}
        >
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Ingrese un título"
          label="Título"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onInputChange}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          placeholder="¿Qué sucedió en el dia de hoy?"
          minRows={5}
          name="body"
          value={body}
          onChange={onInputChange}
        />
      </Grid>
      <Grid container justifyContent="end">
        <Button onClick={onDelete} color="error">
          <DeleteOutline />
          Borrar
        </Button>
      </Grid>
      {/* Image gallery */}
      <ImageGallery images={note.imageUrls} />
    </Grid>
  );
};
