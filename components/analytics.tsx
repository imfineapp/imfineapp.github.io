"use client";

export function Analytics() {
  return (
    <>
      {/* Yandex Metrika */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              k=e.createElement(t),k.async=1,k.src=r;
              document.body.appendChild(k);
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');
            ym(103260290, 'init', {clickmap:true, accurateTrackBounce:true, trackLinks:true});
          `,
        }}
      />
      <noscript>
        <div>
          <img
            src="https://mc.yandex.ru/watch/103260290"
            style={{ position: "absolute", left: "-9999px" }}
            alt=""
          />
        </div>
      </noscript>

      {/* Google Analytics */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-2CDHZ16V7W"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2CDHZ16V7W');
          `,
        }}
      />
    </>
  );
}
