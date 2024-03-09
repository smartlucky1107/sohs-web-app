import { Children } from "react";

export function PathDisplay(props) {

  return (
      <div className="flex gap-1">
        {Children.toArray(
          props.path.map((path, index) => (
            <div key={'path-'+index}>
              <a className="text-white" href={path.link}> {path.text} </a>
            </div>
          ))
        )}
      </div>
  );
}
