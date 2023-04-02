function AboutBox() {
  return (
    <div className="about__boxes grid">
      <div className="about__box">
        <i className="about__icon icon-fire"></i>
        <div>
          <h3 className="about__title">23</h3>
          <span className="about__subtitll">Project Completed</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-cup"></i>
        <div>
          <h3 className="about__title">304</h3>
          <span className="about__subtitll">Cup of coffee</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-people"></i>
        <div>
          <h3 className="about__title">33</h3>
          <span className="about__subtitll">Satisfied clients</span>
        </div>
      </div>
      <div className="about__box">
        <i className="about__icon icon-badge"></i>
        <div>
          <h3 className="about__title">35</h3>
          <span className="about__subtitll">Nominees Winner</span>
        </div>
      </div>
    </div>
  );
}

export default AboutBox;
