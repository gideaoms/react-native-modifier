import { Provider } from '../modifier'
import { Title } from "../components/title";

export default function Page() {
  return (
    <Provider>
      <Title />
    </Provider>
  );
}
