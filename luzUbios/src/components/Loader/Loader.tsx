import styles from './loader.module.css'

const Loader = () => {

  return (
    <div className={styles.loader}>

      <svg xmlns="http://www.w3.org/2000/svg"  style={{margin: 'auto', background: 'rgb(241, 242, 243)', display: 'block', shapeRendering: 'auto'}} width="170px" height="170px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
      <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#1d0e0b" stroke="none">
        <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
      </path>
      </svg>

    </div>
  )
}

export default Loader