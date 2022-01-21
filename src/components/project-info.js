import React from "react"
import { container } from "./project-info.module.scss"

const ProjectInfo = ({ tags, date, link }) => {
  return (
    <aside className={container}>
      <p>
        <strong>Role</strong>
      </p>
      <p>
        <pre>{tags.replaceAll(/, /gi, "\n")}</pre>
      </p>
      <p>
        <strong>Date</strong>
      </p>
      <p>{date}</p>
      {link && (
        <a href={`${link}`} rel="noopen noreferrer" target="_blank">
          <i>View live project</i>
        </a>
      )}
    </aside>
  )
}

export default ProjectInfo
