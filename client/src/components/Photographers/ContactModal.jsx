import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./contactmodal.scss";
import useForm from "../../hooks/useForm";
import validate from "../../functions/validateValues";

const ContactModal = ({ open, onClose, name, id }) => {
	const { handleChange, values, handleSubmit, errors } = useForm(
		validate,
		id,
		onClose
	);
	const closeCross = <FontAwesomeIcon icon={faTimes} />;

	if (!open) return null;
	return (
		<div className="modal-container">
			<button onClick={onClose} className="modal-cross">
				{closeCross}
			</button>
			<div className="contact-form">
				<div className="form-title">
					<h1>Contactez-moi</h1>
					<h2>{name}</h2>
				</div>
				<form className="user-details" onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="firstName">{"Prénom"}</label>
						<input
							id="firstName"
							name="firstName"
							className="form-control"
							type="text"
							value={values.firstName}
							onChange={handleChange}
						/>
						{errors.firstName && (
							<p className="error-msg">*{errors.firstName}</p>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="lastName">{"Nom"}</label>
						<input
							id="lastName"
							name="lastName"
							className="form-control"
							type="text"
							value={values.lastName}
							onChange={handleChange}
						/>
						{errors.lastName && (
							<p className="error-msg">*{errors.lastName}</p>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="email">{"Email"}</label>
						<input
							id="email"
							name="email"
							className="form-control"
							type="email"
							value={values.email}
							onChange={handleChange}
						/>
						{errors.email && (
							<p className="error-msg">*{errors.email}</p>
						)}
					</div>
					<div className="form-group">
						<label htmlFor="message">{"Votre message"}</label>
						<textarea
							id="message"
							name="message"
							className="form-control"
							type="text"
							value={values.message}
							onChange={handleChange}
							rows="6"
							cols="45"
							wrap="hard"
						/>
					</div>
					<input
						type="submit"
						value="Envoyer"
						className="submit-btn-input"
						onClick={handleSubmit}
					/>
				</form>
			</div>
		</div>
	);
};

export default ContactModal;
