import { BotonFlotante } from "../components/BotonFlotante";
import { JournalLayout } from "../layout/JournalLayout";
import { NothingSelectedView, NoteView } from "../views/";

export const JournalPages = () => {
  return (
    <>
      <JournalLayout>
         <NothingSelectedView /> 
        {/* <NoteView /> */}
        <BotonFlotante />
      </JournalLayout>
    </>
  );
};
