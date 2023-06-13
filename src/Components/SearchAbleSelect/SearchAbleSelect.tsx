import React, { useEffect ,useState, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"

import { ChevronDownIcon } from "@fluentui/react-icons-mdl2"

import styles from "./style.module.css"

interface IProps {
  title: string
  options: string[]
  id: string
}

export const SearchAbleSelect = ({title , options , id} : IProps) => {
  const dispatch = useDispatch()
  const [localOptions , setLocalOptions] = useState([...options]) 
  const [showOptions , setShowOptions] = useState(false)

  const defaultOptions =  [...options]

  const selectRef = useRef<HTMLDivElement>(null);

  const hanldeHideOptions = (e: MouseEvent) => {
    if (selectRef.current && !selectRef.current.contains(e.target as Node)) {
      setShowOptions(false);
      document.removeEventListener('click', hanldeHideOptions);
    }
  };

  const handleShowOptions = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setShowOptions(true);
    document.body.addEventListener('click', hanldeHideOptions);
    e.currentTarget.addEventListener('click', hanldeHideOptions);
  };

  const filterOptions = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newOptions: string[] = localOptions;

    if (e.target.value !== '') {
      newOptions = newOptions.filter((value) =>
        `${value}`.toLocaleLowerCase().includes(e.target.value.toLowerCase())
      );

      setLocalOptions(newOptions);
    } else {
      setLocalOptions(defaultOptions);
    }
  };

  useEffect(() => {
    return () => {
      document.removeEventListener('click', hanldeHideOptions);
    };
  }, []);

  return (
    <div className={styles.select} ref={selectRef}>
      <div className={styles.head} onClick={handleShowOptions}>
        <input
          type="text"
          onChange={filterOptions}
          className={styles.input}
          placeholder={title}
          id={id}
        />
        <ChevronDownIcon
          className={showOptions ? styles.icon : styles.icon_open}
          style={{ color: '#2b579a' }}
        />
      </div>
      {showOptions && (
        <div className={styles.options}>
          <div className={styles.wrapper}>
            <div className={styles.options_list}>
              {localOptions.map((value) => (
                <p className={styles.option_item}>{value}</p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );

}