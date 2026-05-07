const services = [
  {
    icon: "浴",
    title: "犬猫洗护",
    text: "温水清洁、基础梳理、耳眼护理和吹干整理，适合日常维护。",
  },
  {
    icon: "毛",
    title: "毛发护理",
    text: "针对打结、浮毛和换毛期护理，帮助毛发更顺滑蓬松。",
  },
  {
    icon: "净",
    title: "皮肤清洁",
    text: "按皮肤敏感程度选择温和用品，重点清洁易出油和易潮湿区域。",
  },
  {
    icon: "型",
    title: "基础造型",
    text: "脚底毛、腹底毛、局部修剪和轮廓整理，让日常活动更清爽。",
  },
];

const steps = [
  {
    title: "到店评估",
    text: "记录宠物毛发、皮肤、体型和情绪状态，确认当次护理重点。",
  },
  {
    title: "温和清洁",
    text: "按犬猫差异和皮肤敏感度使用合适用品，控制水温与清洁力度。",
  },
  {
    title: "护理吹干",
    text: "分区吹干并同步梳理，关注耳后、腋下、腹底等易潮湿位置。",
  },
  {
    title: "交付建议",
    text: "交付时说明毛发和皮肤观察结果，给出下一次护理建议。",
  },
];

const trustItems = [
  ["透明用品", "洗护用品清楚陈列，按宠物状态选择。"],
  ["独立消毒", "工具分区管理，护理台面及时清洁。"],
  ["专业护理", "关注皮肤、毛结、指甲和耳眼细节。"],
  ["舒适环境", "预约制控流，减少嘈杂等待和交叉干扰。"],
];

const packages = [
  {
    image:
      "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=900&q=82",
    alt: "短毛犬日常洗护",
    tags: ["日常维护", "犬猫适用"],
    title: "清爽基础洗护",
    text: "适合常规清洁、轻度浮毛和基础护理，保持宠物日常洁净舒适。",
  },
  {
    image:
      "https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=900&q=82",
    alt: "长毛宠物毛发护理",
    tags: ["长毛护理", "蓬松整理"],
    title: "毛发顺护整理",
    text: "面向长毛、换毛期和易打结宠物，提升毛发顺滑度与蓬松感。",
  },
  {
    image:
      "https://images.unsplash.com/photo-1574158622682-e40e69881006?auto=format&fit=crop&w=900&q=82",
    alt: "猫咪温和护理",
    tags: ["敏感友好", "低刺激"],
    title: "温和皮肤清洁",
    text: "适合皮肤敏感、局部出油或需要更细致观察的犬猫护理需求。",
  },
];

export default function Home() {
  return (
    <>
      <header className="site-header">
        <nav className="nav" aria-label="主导航">
          <a className="brand" href="#top" aria-label="PawCare 洗护空间首页">
            <span className="brand-mark" aria-hidden="true">
              爪
            </span>
            <span>PawCare 洗护空间</span>
          </a>
          <div className="nav-links" aria-label="页面导航">
            <a href="#services">服务</a>
            <a href="#process">流程</a>
            <a href="#packages">精选</a>
            <a href="#contact">门店</a>
          </div>
          <a className="nav-cta" href="tel:13800000000">
            电话预约
          </a>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="PawCare 洗护空间品牌介绍">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">犬猫洗护 · 毛发护理 · 舒适到店</p>
              <h1>PawCare 洗护空间</h1>
              <p>
                用透明用品、独立消毒和温和护理流程，为每一只宠物提供干净、舒适、可被信赖的洗护体验。
              </p>
              <div className="actions">
                <a className="button button-primary" href="tel:13800000000">
                  立即电话预约
                </a>
                <a className="button button-secondary" href="#services">
                  查看洗护服务
                </a>
              </div>
            </div>
          </div>
          <div className="hero-facts" aria-label="品牌基础信息">
            <div className="fact-row">
              <div className="fact">
                <strong>犬猫友好</strong>
                <span>分区接待，降低紧张感</span>
              </div>
              <div className="fact">
                <strong>透明护理</strong>
                <span>用品与流程清楚可见</span>
              </div>
              <div className="fact">
                <strong>预约到店</strong>
                <span>减少等待，节奏更稳定</span>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="section-head">
              <h2>基础洗护服务</h2>
              <p>
                围绕宠物皮肤状态、毛发长度和性格反应制定护理节奏，避免过度清洁和粗暴处理。
              </p>
            </div>
            <div className="service-grid">
              {services.map((service) => (
                <article className="card service-card" key={service.title}>
                  <span className="icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="section-soft">
          <div className="container process">
            <div className="process-media">
              <img
                src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=1000&q=82"
                alt="宠物洗护护理环境"
              />
            </div>
            <div>
              <div className="section-head">
                <h2>稳定温和的洗护流程</h2>
              </div>
              <div className="steps">
                {steps.map((step, index) => (
                  <article className="step" key={step.title}>
                    <span className="step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section aria-label="品牌信任">
          <div className="container">
            <div className="section-head">
              <h2>看得见的安心感</h2>
              <p>把清洁、消毒、护理和沟通放在明处，让主人知道宠物正在被认真对待。</p>
            </div>
            <div className="trust-band">
              {trustItems.map(([title, text]) => (
                <div className="trust-item" key={title}>
                  <strong>{title}</strong>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="packages" className="section-soft">
          <div className="container">
            <div className="section-head">
              <h2>精选服务</h2>
              <p>不做复杂捆绑，按真实护理需求选择合适项目。</p>
            </div>
            <div className="package-grid">
              {packages.map((item) => (
                <article className="card package-card" key={item.title}>
                  <img src={item.image} alt={item.alt} />
                  <div className="package-body">
                    <div className="package-meta">
                      {item.tags.map((tag) => (
                        <span className="tag" key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container contact">
            <div className="contact-panel">
              <h2>预约一次更舒适的洗护</h2>
              <p>
                建议提前电话确认宠物体型、毛发状态和可预约时间，到店后护理师会再次评估当次方案。
              </p>
              <div className="actions">
                <a className="button button-primary" href="tel:13800000000">
                  拨打 138-0000-0000
                </a>
                <a className="button button-secondary" href="#contact">
                  微信预约咨询
                </a>
              </div>
            </div>
            <div className="info-list" aria-label="门店信息">
              <div className="info-row">
                <span>门店地址</span>
                <strong>城市中心门店 / 地址待替换</strong>
              </div>
              <div className="info-row">
                <span>营业时间</span>
                <strong>周一至周日 10:00-20:00</strong>
              </div>
              <div className="info-row">
                <span>预约电话</span>
                <strong>
                  <a href="tel:13800000000">138-0000-0000</a>
                </strong>
              </div>
              <div className="info-row">
                <span>服务说明</span>
                <strong>到店前请告知宠物年龄、体重、是否敏感或有特殊护理需求。</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <span>© 2026 PawCare 洗护空间</span>
          <span>犬猫洗护 · 毛发护理 · 基础造型</span>
        </div>
      </footer>
    </>
  );
}
