import Button from '../Button/Button';

export default ({ current, total, next, prev, input, langPrev, langNext }) =>
    <div className="grid">
        <div className="grid-fit-content u-mr-auto">
            <div className="grid sm-gutter grid-va-middle">
                <div className="grid-xs-fit-content">
                    <input value={current} type="number" min="1" max={total} onChange={input} />
                </div>
                <div className="grid-fit-content">
                    <span> / {total}</span>
                </div>
            </div>
        </div>
        <div className="grid-fit-content">
            <div className="grid sm-gutter">
                <div className="grid-fit-content">
                    <Button color="primary" onClick={prev} disabled={current === 1}>
                        <i className="pricon pricon-previous"></i> <span className="hidden-xs">{(langNext) ? langNext : null}</span>
                    </Button>
                </div>
                <div className="grid-fit-content">
                    <Button color="primary" onClick={next} disabled={current === total}>
                        <i className="pricon pricon-next"></i> <span className="hidden-xs">{(langNext) ? langNext : null}</span>
                    </Button>
                </div>
            </div>
        </div>
    </div>;