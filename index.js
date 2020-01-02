const load = async () => {
  const response = await fetch(
    "https://api.spotify.com/v1/me/player/currently-playing?market=US",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization:
          "Bearer BQAy5JlEa-Irjh5dk0n84IvsCjCUPXU6Le6Et_CNsd_9NWZ_u80rJ2g529u82qozko5QyesW9w5YgJB4otBLlHBCpiqsTuDYS6ytC10W1slUq19qaaowMUD3c9mQx-AaVhvcbEqV3hcxQ-W9jxRbEBTmht22MUs40BFcGkzIRIk"
      }
    }
  );
  const myJson = await response.json();
  console.log(myJson);
};
