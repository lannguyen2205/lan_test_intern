import styles from "./ProfileModal.module.scss";
import { Modal, useMantineTheme } from "@mantine/core";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className={cx("infoForm")}>
        <h3>Your info</h3>
        <div>
          <input
            type="text"
            className={cx("infoInput")}
            name="FirstName"
            placeholder="First Name"
          />
          <input
            type="text"
            className={cx("infoInput")}
            name="LastName"
            placeholder="Last Name"
          />
        </div>
        <div>
          <input
            type="text"
            className={cx("infoInput")}
            name="worksAT"
            placeholder="Works at"
          />
        </div>
        <div>
          <input
            type="text"
            className={cx("infoInput")}
            name="livesIN"
            placeholder="LIves in"
          />
          <input
            type="text"
            className={cx("infoInput")}
            name="Country"
            placeholder="Country"
          />
        </div>
        <div>
          <input
            type="text"
            className={cx("infoInput")}
            placeholder="RelationShip Status"
          />
        </div>
        <div>
          Profile Image
          <input type="file" name="profileImg" />
          Cover Image
          <input type="file" name="coverImg" />
        </div>
        <button className={cx("button", "infoButton")}>Update</button>
      </form>
    </Modal>
  );
}
export default ProfileModal;
