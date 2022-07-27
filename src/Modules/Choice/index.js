

export default function Choice() {
  return (
    <div>
      <div className="row container mt-10  ">
        <div className="col-lg-4 bg-white mx-auto rounded p-3 shadow-sm">
          <div className="text-xl text-center text-info my-2 font-bold">
            <h2>Type de Compte</h2>
          </div>
          <hr />
          <div className="flex gap-10 mx-auto p-3 justify-center align-items-center">
            <div className="text-center">
              <img
                width={"70px"}
                height={"70px"}
                className="p-2 bg-light mx-auto rounded-full text-2xl border"
                alt="profil"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                }
              />
              <h3>Apprenant</h3>
              <p className="text-xs text-muted">* Reserve aux personnes physiques</p>

            </div>

            <div className="text-center">
              <img
                width={"70px"}
                height={"70px"}
                className="p-2 bg-light mx-auto rounded-full text-2xl border"
                alt="profil"
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Breezeicons-actions-22-im-user.svg/1200px-Breezeicons-actions-22-im-user.svg.png"
                }
              />
              <h3>Professionel</h3>
              <p className="text-xs text-muted">* Reserve aux personnes morales</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
