import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import FormComponent from '../../formComponents';
import styles from './CheckNamePopups.module.css';

const SubmitBtnExtra = () => {
  return;
};

const CheckNamePopups = ({
  url,
  showCheckNamePopup,
  setShowCheckNamePopup,
  name,
  id,
}) => {
  const router = useRouter();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState('');
  const [returnValue, setReturnValue] = useState({});

  const turnOffPopup = () => {
    setShowCheckNamePopup(false);
  };

  //redirect on update
  useEffect(() => {
    if (success) {
      turnOffPopup();
      setMessage('Theme Name Updated');
      return router.push(`/editor/${id}`);
    }
  }, [success]);

  const formBuilder = [
    {
      fieldType: 'TextField',
      label: 'Name',
      initFocus: false,
      maxChar: 32,
      minChar: 2,
      isRequired: true,
      fieldName: 'name',
      value: name,
      placeholder: name,
    },
  ];

  return (
    <div id={styles.deletePopup}>
      <div className={styles.popupContent}>
        <h5
          className={styles.heading}
        >{`Give this theme a better name: ${name}`}</h5>

        <h5 className="heading success-message">{message}</h5>
        <FormComponent
          setSuccess={setSuccess}
          setReturnValue={setReturnValue}
          submitValue="Update and Edit"
          reason="Update Theme Name"
          reqType="patch"
          url={`${url}/${id}`}
          formBuilder={formBuilder}
          submitBtnExtra=""
        />
      </div>
    </div>
  );
};

export default CheckNamePopups;
