import { FC, useEffect, useState } from 'react';

interface IForecast {
  date: Date;
  temperatureC: number;
  temperatureF: number;
  summary: string;
};

const FetchData: FC = () => {

  const [loading, setLoading] = useState(true);
  const [forecasts, setForecasts] = useState<IForecast[]>([]);
  const [error, setError] = useState(null as any);
  
  useEffect(() => {
    let unmounted = false;

    (async () => {
      try {
        const response = await fetch('weatherforecast');
        const data = await response.json();
        if (unmounted) {
          return;
        }
        setForecasts(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    })();

    return function cleanup() {
      unmounted = true
    };
  }, []);

  function renderForecastsTable(forecasts: any[]) {
    return (
      <table aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Date</th>
            <th>Temp. (C)</th>
            <th>Temp. (F)</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
          {forecasts.map(forecast =>
            <tr key={forecast.date}>
              <td>{forecast.date}</td>
              <td>{forecast.temperatureC}</td>
              <td>{forecast.temperatureF}</td>
              <td>{forecast.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  if (error) {
    return (
      <div>
        {error}
      </div>
    );
  }

  let contents = loading
    ? <p><em>Loading...</em></p>
    : renderForecastsTable(forecasts);

  return (
    <div>
      <h1 id="tabelLabel" >Weather forecast</h1>
      <p>This component demonstrates fetching data from the server.</p>
      {contents}
    </div>
  );
}

export { FetchData };