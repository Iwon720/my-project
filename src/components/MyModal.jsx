import React from "react"; /*rcfe*/

const MyModal = ({ visible, setVisible, children }) => {

  return (
    <>
      <div className={visible ? 'modal open' : 'modal'}>
        <div className="modal-content">
          <i className="material-icons right m1"
            onClick={() => (setVisible(false))}>close</i>
          <div className="modal-body">

            {children}
          </div>
        </div>
      </div>

      <div
        onClick={() => {
          setVisible(false);
        }}
        className={visible ? 'modal-overlay open-overlay' : 'modal-overlay'}></div>

    </>
  );
};

export default MyModal;
