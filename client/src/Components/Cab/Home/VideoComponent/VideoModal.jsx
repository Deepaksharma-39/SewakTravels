import { Modal, ModalBody } from "reactstrap";

const VideoModal= ({ modal, toggle }) => {
    return (
      <Modal modalClassName="video-modal" centered size="lg" fade isOpen={modal} toggle={toggle}>
        <ModalBody>
          <button onClick={toggle} type="button" className="btn-close">
            <span>×</span>
          </button>
          <iframe title="youtubeVideo" src="/assets/video/logo.mp4" allowFullScreen></iframe>
        </ModalBody>
      </Modal>
    );
  };
  
  export default VideoModal;