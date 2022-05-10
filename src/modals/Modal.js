
import FormSignup from "../components/Content/Forms/FormSignup";
import FormLogin from "../components/Content/Forms/FormLogin";

const Modal = ({id,token, setToken, 
                toggleModal, setToggleModal,
                nameModal, setNameModal}) => {

  return toggleModal && <div className="modal-overlay">
                            <div className="modal-wrapper">
                              <div className="modal">
                                {nameModal === "signup" && <FormSignup token={token} setToken={setToken}
                                                                      setToggleModal={setToggleModal}
                                                                      setNameModal={setNameModal}/>}
                                {nameModal === "login" && <FormLogin token={token} setToken={setToken}
                                                                      setToggleModal={setToggleModal}
                                                                      setNameModal={setNameModal}/>}
                              </div>
                            </div>
                          </div>
                        
};

export default Modal;