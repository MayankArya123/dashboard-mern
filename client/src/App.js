import "./App.css";
import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import Chart from "../node_modules/chart.js/dist/chart.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faChevronRight,
  faEllipsisH,
  faEllipsisV,
  faBell,
  faPhoneAlt,
  faComment,
  faChevronDown,
  faCog,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  useEffect(() => {
    //    var ctx1= $("#chart1");
    //    ctx1.destroy();

    var ctx = $("#chart-line");

    var myLineChart = new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: ["Spring", "Summer", "Fall"],
        datasets: [
          {
            data: [1200, 1700, 800],
            backgroundColor: [
              "rgba(100, 255, 0, 0.5)",
              "rgba(200, 50, 255, 0.5)",
              "rgba(0, 100, 255, 0.5)",
            ],
          },
        ],
      },
      options: {
        title: {
          display: true,
          text: "Weather",
        },
      },
    });

    return () => {
      myLineChart.destroy();
    };
  }, []);



  return (
    <div className="App">
      <div className="home_page">
        {/*     naviagation section     */}

        <section class="navigation_section">
          <div className="list-items">
            <div className="icon">
              {" "}
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>
            <div className="icon">
              <FontAwesomeIcon icon={faHome} />{" "}
            </div>

            <div className="icon setting-icon">
              <FontAwesomeIcon icon={faCog} />{" "}
            </div>
          </div>
        </section>

        {/*     naviagation section  end    */}

        {/*     dashboard section  start  */}

        <section class="dashboard">
          <div class="dashboard_navigation">
            <div className="icon">
              {" "}
              <FontAwesomeIcon icon={faBell} />{" "}
            </div>
            <div> name </div>
            <div className="icon">
              img <FontAwesomeIcon icon={faChevronDown} />{" "}
            </div>
          </div>

          <div class="dasboard_header">
            <div class="header_first_section">
              <h4>Dashboard</h4>
              <h6>Monday,06 june 2021</h6>
            </div>
            <div class="header_second_section">
              <button className="add-btn">+Add</button>
              <div class="input-group flex-nowrap">
                <span class="input-group-text" id="addon-wrapping">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search for Application here"
                  aria-label="Username"
                  aria-describedby="addon-wrapping"
                />
              </div>
            </div>
          </div>

          <div class="dashboard_content">
            <div className="row wide">
              <div className="col-lg-9 col-md-7 col-sm-7 col-xs-9 col-7">
                <div class="row row_2">
                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    {/*    block 1 start */}

                    <div className="block_1 box">
                      <div className="left_half">
                        <p>Your Application</p>
                        <h6>7956</h6>
                        <p> +35%</p>
                      </div>
                      <div className="right_half">
                        <div className="dotts">
                          {" "}
                          <FontAwesomeIcon icon={faEllipsisH} />{" "}
                        </div>

                        <div class="circular">
                          <div class="inner"> </div>
                          <p class="numb">80%</p>
                          <div class="circle">
                            <div class="bar left">
                              <div class="progress"> </div>
                            </div>
                            <div class="bar right first">
                              <div class="progress"> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*    block 1 end */}
                  </div>

                  <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    {/*    block 2 start */}

                    <div className="block_2 box">
                      <div className="inside">
                        <div className="left_half">
                          <p>Your Application</p>
                          <h6>7956</h6>
                          <p> +35%</p>
                        </div>
                        <div className="right_half">
                          <div className="dotts">
                            <FontAwesomeIcon icon={faEllipsisH} />{" "}
                          </div>

                          <div class="circular">
                            <div class="inner"> </div>
                            <p class="numb">50%</p>
                            <div class="circle">
                              <div class="bar left">
                                <div class="progress"> </div>
                              </div>
                              <div class="bar right second">
                                <div class="progress"> </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*    block 2 start */}
                  </div>

                  <div className="col-lg-4 col-md-12 col-sm-12 col-12">
                    <div className="block_3 box">
                      {/*    block 3 start */}
                      <div className="left_half">
                        <p>Your Application</p>
                        <h6>7956</h6>
                        <p> +35%</p>
                      </div>
                      <div className="right_half">
                        <div className="dotts">
                          <FontAwesomeIcon icon={faEllipsisH} />{" "}
                        </div>

                        <div class="circular">
                          <div class="inner"> </div>
                          <p class="numb">75%</p>
                          <div class="circle">
                            <div class="bar left">
                              <div class="progress"> </div>
                            </div>
                            <div class="bar right third">
                              <div class="progress"> </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*    block 3 end */}
                  </div>

                  <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                    {/*    block 8 start */}

                    <div className="box_8">
                      <div className="heading">
                        <div> Application Received </div>
                        <div className="second_section">
                          <a>This year</a>
                          <a>This week</a>
                          <a>today</a>
                          <a> Download Report</a>
                          <a>
                            <FontAwesomeIcon icon={faEllipsisV} />{" "}
                          </a>
                        </div>
                      </div>
                    </div>

                    {/*    block 8 end */}
                    <div class="container">
                      <div class="row">
                        <div class="col-xs-4"></div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 col-md-4 col-sm-4 col-12 margin_left">
                    <div className="box_9">
                      {/*    block 9 start */}
                      <div className="content">
                        YourApllication
                        <div className="data">
                          <div className="data_block">
                            <div className="start start-1">Application</div>

                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-1"
                                role="progressbar"
                                style={{ width: 25 + "%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                25%
                              </div>
                            </div>
                          </div>
                          <div className="data_block">
                            <div className="start start-2">Application</div>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-2"
                                role="progressbar"
                                style={{ width: 25 + "%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                25%
                              </div>
                            </div>
                          </div>
                          <div className="data_block">
                            <div className="start start-3">Application</div>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-3"
                                role="progressbar"
                                style={{ width: 75 + "%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                75%
                              </div>
                            </div>
                          </div>
                          <div className="data_block">
                            <div className="start start-4">Application</div>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-4"
                                role="progressbar"
                                style={{ width: 50 + "%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                50%
                              </div>
                            </div>
                          </div>
                          <div className="data_block">
                            <div className="start start-5">Application</div>
                            <div class="progress">
                              <div
                                class="progress-bar progress-bar-5"
                                role="progressbar"
                                style={{ width: 25 + "%" }}
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              >
                                25%
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/*    block 9 end */}
                    </div>
                  </div>

                  <div className="col-lg-8 col-md-8 col-sm-8 col-12">
                    {/*    block 10 start */}

                    <div className="box_10">
                      <div className="heading">
                        <div>Referals and Campaign Stats</div>
                        <div className="section_2">
                          Compaigns sent in total
                          <br></br>
                          40 Compaigns sent in last month
                        </div>
                      </div>
                      <div className="cards">
                        <div className="card">
                          <h6> users Reached</h6>

                          <p> icon 345 </p>
                          <h4> 7956 </h4>
                        </div>
                        <div className="card">
                          <h6> users Reached</h6>

                          <p> icon 345 </p>
                          <h4> 7956 </h4>
                        </div>
                        <div className="card">
                          <h6> users Reached</h6>

                          <p> icon 345</p>
                          <h4> 7956 </h4>
                        </div>
                        <div className="card">
                          <h6> users Reached</h6>

                          <p> icon 345 </p>
                          <h4> 7956 </h4>
                        </div>
                      </div>
                      <div className="buttons">
                        <button>start a new campaign here</button>
                        <button> pause all recurring campaign</button>
                      </div>
                    </div>

                    {/*    block 10 end */}
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-4 col-12 margin_left">
                    {/*    block 11 start */}

                    <div className="box_11">
                      <div className="heading">
                        <div className="">Open positions By Department</div>
                        <div className="second_section">
                          <FontAwesomeIcon icon={faEllipsisH} />
                        </div>
                      </div>
                      <div
                        class="page-content page-container"
                        id="page-content"
                      >
                        <canvas
                          id="chart-line"
                          width="299"
                          height="200"
                          class="chartjs-render-monitor"
                        ></canvas>
                      </div>
                    </div>

                    {/*    block 11 end */}
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-5 col-sm-5 col-5">
                {/*    block 12 start */}

                <div className="block_12">
                  <p className="text-center">
                    {" "}
                    Hello mayank <br></br>
                    You have 8 new Apllications Today!{" "}
                  </p>
                  <div className="logo">
                    <FontAwesomeIcon icon={faArrowRight} />
                  </div>
                  <div className="img_block"></div>
                  <div className="data">
                    <div className="data_content">
                      <div className="data_block">
                        <div className="first_section"> New Applicants </div>
                        <div className="second_section">
                          <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                      </div>
                      <div className="data_block data_block_1">
                        <div className="first_section flex">
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                      <div className="data_block">
                        <div className="first_section flex">
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                      <div className="data_block">
                        <div
                          className="first_sectio
                                   
                                   n flex"
                        >
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                      <div className="data_block">
                        <div className="first_section flex">
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>{" "}
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                      <div className="data_block">
                        <div className="first_section flex">
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                      <div className="data_block">
                        <div className="first_section flex">
                          {" "}
                          <div className=""> logo</div>{" "}
                          <div className="wrapper">
                            {" "}
                            <h6> name </h6> <small> Applied by linkedin </small>{" "}
                          </div>{" "}
                        </div>
                        <div className="second_section">
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faComment} />{" "}
                          </a>
                          <a>
                            {" "}
                            <FontAwesomeIcon icon={faPhoneAlt} />{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*    block 12 end */}
              </div>
            </div>
          </div>

          {/*     dashboard section  ends  */}
        </section>
      </div>
    </div>
  );
}

export default App;
