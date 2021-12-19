import Head from 'next/head'
import { useStyletron } from 'baseui';
import {FlexGrid, FlexGridItem} from 'baseui/flex-grid';

import Header from '@components/Header';
import Footer from '@components/Footer';
import MyCard from '@components/MyCard';
// import IndexContents from '@components/IndexContents';

import {CurrentPosition} from 'data/resume/CurrentPosition.js';
import { Education } from 'data/resume/Education.js';
import { ReserchAreas } from 'data/resume/ResearchAreas.js';
import { SelectedResearchProjects } from 'data/resume/SelectedResearchProjects.js';


const Home = () => {
  const [css, theme] = useStyletron()

  return (
    <div className="Container">
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={css({ maxWidth: "800px", margin: "auto" })}>

        <Header title="Mengzhen Zhang" />
        
        <div className={css({ maxWidth: "750px", margin: "auto" })}>

          {/* Curret Position */}
          <div className={css({ marginBottom: theme.sizing.scale1000 })}>
            <div className={css({ fontSize: theme.typography.HeadingXSmall.fontSize })}>
              <p><u><b>CURRENT POSITION</b></u></p>
            </div>
            <div className={css({
              display: 'flex', fontSize: theme.typography.ParagraphLarge.fontSize,
              justifyContent: 'space-between',
              marginBottom: theme.sizing.scale200
            })}>
              <div><b>{CurrentPosition.title}</b></div>
              <div>{CurrentPosition.duration}</div>
            </div>
            <div className={css({
              fontSize: theme.typography.ParagraphLarge.fontSize,
              marginBottom: theme.sizing.scale200
            })}>{CurrentPosition.affiliation}</div>
            <div className={css({ fontSize: theme.typography.ParagraphLarge.fontSize, color: theme.colors.mono700 })}>
                  {CurrentPosition.description}
            </div>
          </div>

          
          {/* Education */}
          <div className={css({ marginBottom: theme.sizing.scale1000 })}>
            <div className={css({ fontSize: theme.typography.HeadingXSmall.fontSize })}>
              <p><u><b>EDUCATION</b></u></p>
            </div>
            {Education.map(education => (
              <div className = {css({ marginBottom: theme.sizing.scale600})}>
                <div className={css({
                  display: 'flex', fontSize: theme.typography.ParagraphLarge.fontSize,
                  justifyContent: 'space-between',
                  marginBottom: theme.sizing.scale200
                })}>
                  <div><b>{education.title}</b></div>
                  <div>{education.duration}</div>
                </div>
                <div className={css({
                  fontSize: theme.typography.ParagraphLarge.fontSize,
                  marginBottom: theme.sizing.scale200
                })}>{education.affiliation}</div>
              </div>
            ))}</div>


          {/* Research Areas */}
          <div className={css({ marginBottom: theme.sizing.scale1000 })}>
            <div className={css({ fontSize: theme.typography.HeadingXSmall.fontSize })}>
              <p><u><b>RESEARCH AREAS</b></u></p>
            </div>
            <div className={css({
              display: 'flex', fontSize: theme.typography.ParagraphLarge.fontSize,
              justifyContent: 'space-between',
              marginBottom: theme.sizing.scale200
            })}>
              { '| '+ReserchAreas.join(' | ')+' |'}              
            </div>
          </div>

          {/* Selected Research Projects */}
          <div className={css({ marginBottom: theme.sizing.scale1000 })}>
            <div className={css({ fontSize: theme.typography.HeadingXSmall.fontSize })}>
              <p><u><b>Selected Research Projects</b></u></p>
            </div>
            <ol className={css({
              fontSize: theme.typography.ParagraphLarge.fontSize,
              marginBottom: theme.sizing.scale200
            })}>
              {SelectedResearchProjects.map(project => (
                <li>
                  <p>{project.title}</p>
                  <p className={css({color: theme.colors.mono700})}>{project.description}</p>
                  <p>See <u>{project.publications[0]}</u>{project.publications.length>1 ? [].concat(...project.publications.slice(1).map(publication => (
                    ([', ', <u> {publication} </u>])
                  ))) : ''}.
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  )
}

export default Home;
