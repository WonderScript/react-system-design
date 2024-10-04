import {createPortal} from 'react-dom';

export default function Modal({childern}) {
  //   const [showModal, setShowModal] = useState(false);
  return <>{createPortal(childern, document.body)}</>;
}
