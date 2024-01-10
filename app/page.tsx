/** @format */

import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.mainDiv}>
                <div className={styles.topDiv}>
                    <div className={styles.heading}>
                        Check your financial health
                    </div>
                    <div className={styles.subHeading}>
                        Use WeathoMeter to get a free report card for your
                        finances- within minutes!
                    </div>
                    <button className={styles.orangeBtn}>Get Started</button>
                </div>

                <div className={styles.midDiv}>
                    <div className={styles.checkDivLeft}>
                        <div>
                            <Image
                                src={"/checkbox.png"}
                                alt={""}
                                width={41}
                                height={41}
                            />
                            <span className={styles.checkText}>
                                Expected Retirement Age
                            </span>
                        </div>
                        <hr className={styles.line} />
                        <div>
                            <Image
                                src={"/checkbox.png"}
                                alt={""}
                                width={41}
                                height={41}
                            />
                            <span className={styles.checkText}>
                                Identify Mistakes
                            </span>
                            <hr className={styles.line} />
                        </div>
                    </div>

                    <Image
                        src={"/phone.png"}
                        alt={""}
                        width={525}
                        height={515}
                    />

                    <div className={styles.checkDivRight}>
                        <div>
                            <Image
                                src={"/checkbox.png"}
                                alt={""}
                                width={41}
                                height={41}
                            />
                            <span className={styles.checkText}>
                                Personalised Road Map
                            </span>
                        </div>
                        <hr className={styles.line} />
                        <div>
                            <Image
                                src={"/checkbox.png"}
                                alt={""}
                                width={41}
                                height={41}
                            />
                            <span className={styles.checkText}>
                                Tips To Improve
                            </span>
                            <hr className={styles.line} />
                        </div>
                    </div>
                </div>

                <div className={styles.lowerDiv}>
                    <div className={styles.vector}>
                        <Image
                            src={"/Vector1.png"}
                            alt={""}
                            width={1502}
                            height={790}
                        />
                    </div>
                    <div className={styles.onVector}>
                        <div className={styles.heading2}>How it works ?</div>
                        <Image
                            className={styles.processImg}
                            src={"/process.png"}
                            alt={""}
                            width={884}
                            height={497}
                        />
                        <div className={styles.processText}>
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    marginRight: 166,
                                    fontSize: 27,
                                    fontWeight: "400",
                                    letterSpacing: 1.89,
                                    wordWrap: "break-word",
                                }}
                            >
                                Answer few
                                <br />
                                questions
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 27,
                                    marginRight: 112,
                                    fontWeight: "400",
                                    letterSpacing: 1.89,
                                    wordWrap: "break-word",
                                }}
                            >
                                Register using
                                <br />
                                phone and OTP
                            </div>
                            <div
                                style={{
                                    textAlign: "center",
                                    color: "white",
                                    fontSize: 27,
                                    fontWeight: "400",
                                    letterSpacing: 1.89,
                                    wordWrap: "break-word",
                                }}
                            >
                                Get report and
                                <br />
                                personal roadmap
                            </div>
                        </div>
                        <button className={styles.orangeBtn2}>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
