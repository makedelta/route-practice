import { useParams } from 'react-router-dom';

const Chart = () => {
    const params = useParams();
    const profile = params.strategy;
    return (
      <div>
        <h1>소개</h1>
        <p>{`${profile}라는 전략을 받았습니다`}</p>
      </div>
    );
  };
  
  export default Chart;