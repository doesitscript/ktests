import { check } from "k6";
import http from "k6/http";

// Networking Team code
export default function() {
    //add tag here called end2end
    //add tag here called networkteam
  let res = http.get("http://test.loadimpact.com/");
  check(res, {
    "is status 200": (r) => r.status === 200
  });
}


// our application archict
import http from 'k6/http';

export default function() {
    //add a tag here called end2end
    // add tag here call developersteam
  const response = http.get("http://test.loadimpact.com");


  const response = http.get("http://test.loadimpact.com/signup");
};
