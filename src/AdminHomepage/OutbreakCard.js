import 'bulma/css/bulma.min.css';

const OutbreakCard = () => {
  return (
    <div class="card">
      <header class="card-header p-4">
        <h2 class="card-header-title">
          Case Name
        </h2>
          <br />
          $ 2,782.91
          <br />
          107% of Budget
      </header>
      <div class="card-content">
        <div class="content">
          <div className="is-flex is-justify-content-space-between">
            <p><strong>CREATED</strong></p>
            <p>01.27.2023</p>
          </div>
          <div className="is-flex is-justify-content-space-between">
            <p><strong>CLOSED</strong></p>
            <p>05.18.2023</p>
          </div>
        </div>
      </div>
      <footer class="card-footer p-4">
        <div className="is-flex is-justify-content-right">
          <a href="#" class="has-background-black has-text-white button">Reopen</a>
        </div>
      </footer>
    </div>
  )
}

export default OutbreakCard;
