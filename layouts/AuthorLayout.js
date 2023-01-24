import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About
          </h1>
        </div>
        <div className="items-start space-y-2  xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              <SocialIcon kind="mail" href={`mailto:${email}`} />
              <SocialIcon kind="github" href={github} />
              <SocialIcon kind="linkedin" href={linkedin} />
              <SocialIcon kind="twitter" href={twitter} />
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
      <div className="overflow-x-hidden pb-24 text-black dark:text-white">
        <div className="container-inner relative mx-auto mb-8 text-xl">
          <div className="mb-2 flex flex-col items-center justify-between sm:flex-row">
            <div className="w-1/5">
              <h2
                className="
              mb-3
              text-base
              font-bold
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
            "
              >
                Skill
              </h2>
            </div>
            <div className="ml-6 flex-1 text-lg sm:text-xl">
              <div>
                <h2>
                  <span className="font-semibold">Web Development</span>
                </h2>
                <p className="font-light">
                  PHP, Javascript, Laravel, Vue Js, Mysql, Postgresql, Wordpress, Oracle.
                </p>
              </div>
              <div className="mt-2">
                <h2>
                  <span className="font-semibold">Frontend Development</span>
                </h2>
                <p className="font-light">HTML, CSS, Bootstrap, Tailwind CSS.</p>
              </div>
              <div className="mt-2">
                <h2>
                  <span className="font-semibold">Other</span>
                </h2>
                <p className="font-light">Git, Linux</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
        container-inner relative
        mx-auto
        border-t
        border-gray-600
        pb-8
        pt-8
        text-xl
        sm:pt-8
        md:pt-4
        lg:pt-0
        xl:pt-0
      "
        >
          <div
            className="
          mb-2 flex
          flex-col
          items-center
          justify-between
          pt-8
          sm:flex-row
        "
          >
            <div className="w-1/5">
              <h2
                className="
              mb-3
              text-base
              font-bold
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
            "
              >
                Education
              </h2>
            </div>
            <div className="ml-6 flex-1 text-lg sm:text-xl">
              <div>
                <h2>
                  <span className="font-semibold">Sangga Buana University</span>
                  <span className="font-normal">
                    <i> (Information Systems)</i>
                  </span>
                </h2>
                <p className="font-light">2017 - 2021</p>
              </div>
              <div className="mt-2">
                <h2>
                  <span className="font-semibold">SMK Budaya Bangsa</span>
                  <span className="font-normal">
                    <i> (Software Engineering)</i>
                  </span>
                </h2>
                <p className="font-light">2014 - 2017</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="
        container-inner relative
        mx-auto
        border-t
        border-gray-600
        pb-8
        pt-8
        text-xl
        sm:pt-8
        md:pt-4
        lg:pt-0
        xl:pt-0
      "
        >
          <div
            className="
          mb-2 flex
          flex-col
          items-center
          justify-between
          pt-8
          sm:flex-row
        "
          >
            <div className="w-1/5">
              <h2
                className="
              mb-3
              text-base
              font-bold
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
            "
              >
                Certificate
              </h2>
            </div>
            <div className="ml-6 flex-1 text-lg sm:text-xl">
              <div>
                <h2>
                  <span className="font-semibold">Belajar Dasar Pemrograman Web</span>
                </h2>
                <p className="font-light">Exp Jun, 2023 - (Dicoding.com)</p>
              </div>
              <div>
                <h2>
                  <span className="font-semibold">
                    Belajar Fundamental Front-End Web Development
                  </span>
                </h2>
                <p className="font-light">Exp Jul, 2023 - (Dicoding.com)</p>
              </div>
              <div className="mt-2">
                <h2>
                  <span className="font-semibold">
                    Belajar Membuat Aplikasi Android untuk Pemula
                  </span>
                </h2>
                <p className="font-light">Exp Jun, 2023 - (Dicoding.com)</p>
              </div>
              <div className="mt-2">
                <h2>
                  <span className="font-semibold">
                    Belajar Membuat Aplikasi Flutter untuk Pemula
                  </span>
                </h2>
                <p className="font-light">Exp Jun, 2023 - (Dicoding.com)</p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="work"
          className="
        container-inner relative
        mx-auto
        border-t
        border-gray-600
        pb-8
        pt-8
        text-xl
        sm:pt-8
        md:pt-4
        lg:pt-0
        xl:pt-0
      "
        >
          <div
            className="
          mb-2 flex
          flex-col
          items-center
          justify-between
          pt-8
          sm:flex-row
        "
          >
            <div className="w-1/5">
              <h2
                className="
              mb-3
              text-base
              font-bold
              sm:text-base
              md:text-lg
              lg:text-xl
              xl:text-2xl
            "
              >
                Previous Work
              </h2>
            </div>
            <div className="ml-6 flex-1 text-lg sm:text-xl">
              <div className="mb-1">
                <h2>
                  <span className="font-semibold">
                    PHP Developer (Escredia Digital Indonesia)
                    <span
                      className="
                mt-2
                mb-2
                  mr-2
                  inline-block
                  rounded
                  bg-gray-200
                  px-3
                  py-1
                  text-base
                  font-semibold
                  text-gray-700
                "
                    >
                      2021 - now (15 months)
                    </span>
                  </span>
                </h2>
                <p className="font-normal">
                  Making web rest api using laravel for internal applications from telkomsel
                </p>
              </div>
              <div className="mb-1">
                <h2>
                  <span className="font-semibold">
                    Backend Developer (Dimensi Corporation)
                    <span
                      className="
                mt-2
                mb-2
                  mr-2
                  inline-block
                  rounded
                  bg-gray-200
                  px-3
                  py-1
                  text-base
                  font-semibold
                  text-gray-700
                "
                    >
                      2019 (6 months)
                    </span>
                  </span>
                </h2>
                <p className="font-light">
                  Web Pencari Kerja Dinas Tenaga Kerja dan Transmigrasi Merauke and Web and App
                  Android Anggota Yayasan Budi Luhur Merauke
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
