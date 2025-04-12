import {Provider} from '../modifier'
import {Title} from "@/src/components/title";

export default function Page() {
  return (
    <Provider>
      <Title />
    </Provider>
  );
}
